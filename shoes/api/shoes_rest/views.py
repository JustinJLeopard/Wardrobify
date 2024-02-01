from django.views.decorators.http import require_http_methods
from .models import Shoe, BinVO
from common.json import ModelEncoder
import json
from django.http import JsonResponse, Http404


class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    properties = ["name", "import_href"]


class ShoeListEncoder(ModelEncoder):
    model = Shoe
    properties = ["model_name"]

    def get_extra_data(self, o):
        return {"shoe": o.model_name}


class ShoeDetailEncoder(ModelEncoder):
    model = Shoe
    properties = [
        "manufacturer",
        "model_name",
        "color",
        "picture_url",
        "bin",
    ]
    encoders = {
        "bin": BinVODetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_list_shoes(request, bin_vo_id=None):
    if request.method == "GET":
        if bin_vo_id is not None:
            shoes = Shoe.objects.filter(bin=bin_vo_id)
        else:
            shoes= Shoe.objects.all()
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoeListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            bin_href = content["bin"]
            bin = BinVO.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400,
            )

        shoe = Shoe.objects.create(**content)
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "DELETE", "PUT"])
def api_show_shoe(request, pk):
    try:
        shoe = Shoe.objects.get(id=pk)
    except Shoe.DoesNotExist:
        raise Http404("Shoe not found")

    if request.method == "GET":
        return JsonResponse(
            shoe,
            encoder = ShoeDetailEncoder,
            safe=False,
        )

    elif request.method == "PUT":
        data = json.loads(request.body)

        for field, value in data.items():
            setattr(shoe, field, value)
        shoe.save()
        return JsonResponse(
            shoe,
            encoder=ShoeDetailEncoder,
            safe=False
        )

    elif request.method == "DELETE":
        count, _ = Shoe.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
