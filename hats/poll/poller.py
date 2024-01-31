import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "hats_project.settings")
django.setup()

# Import models from hats_rest, here.
# from hats_rest.models import Something
from hats_rest.models import LocationVO

def get_locations():
    # http://wardrobe-api:8000
    response = requests.get("http://wardrobe-api:8000/api/locations/")
    if response.status_code == 200:
        content = json.loads(response.content)
        for location in content["locations"]:
            LocationVO.objects.update_or_create(
                import_href=location["href"],
                defaults={"name": location["name"]},
            )
    else:
        print(f"Failed to fetch locations: {response.status_code}")

def poll():
    while True:
        print('Hats poller polling for data')
        try:
            # Write your polling logic, here
            get_locations()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
