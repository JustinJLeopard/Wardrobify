from django.http import JsonResponse
# from django.shortcuts import render
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Hat, LocationVO


class LocationVODetailEncoder(ModelEncoder):
    model = LocationVO
    properties = ["name", "import_href"]

class HatListEncoder(ModelEncoder):
    model = Hat
    properties = ["name", "id"]

    def get_extra_data(self, o):
        return {"location": o.location.name}

class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        "name",
        "fabric",
        "style_name",
        "color",
        "pic_url",
        "location",
    ]
    encoders = {
        "location": LocationVODetailEncoder(),
    }

    # def get_extra_data(self, o):
    #     return super().get_extra_data(o)
    #     count =


# Create your views here.
@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            hats = Hat.objects.filter(location=location_vo_id)
        else:
            hats = Hat.objects.all()
        return JsonResponse(
            {"hats": hats},
            encoder=HatListEncoder,
        )
    else:
        print("Starting POST request", request.body)
        content = json.loads(request.body)
        print("Prased content:", content)
        try:
            # location_id = content["location"]
            # print("Location ID:", location_id)
            # location = LocationVO.objects.get(id=location_id)
            # content["location"] = location

            location_href = content["location"]
            print("Location href:", location_href)
            location = LocationVO.objects.get(import_href=location_href)
            content["location"] = location

        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid location id"},
                status=400,
            )
        hat = Hat.objects.create(**content)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe=False,
        )
