import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoes_project.settings")
django.setup()

from shoes_rest.models import BinVO

def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            response = requests.get('http://wardrobe-api:8000/api/bins/')
            response.raise_for_status()
            bins_data = response.json()

            for bin_data in bins_data['bins']:
                bin_vo, created = BinVO.objects.update_or_create(
                    import_href=bin_data['href'],
                    defaults={'name': bin_data['closet_name']}
                )
                if created:
                    print(f'Created new BinVO: {bin_vo.name}')
                else:
                    print(f'Updated BinVO: {bin_vo.name}')

        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(5)


if __name__ == "__main__":
    poll()
