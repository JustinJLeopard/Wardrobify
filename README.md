[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#wardrobify)

# ➤ Wardrobify

Team:
* Damien Camel - Hats
* Justin Leopard - Shoes

How To Run Application 🐳


Follow these steps to get the application up and running on your local machine:

Open your terminal.
Navigate to the directory where you would like to clone the project.

Clone the repo (in terminal, type):
git clone https://gitlab.com/dcamel/Wardrobify.git

Change the directory to the project folder.
Ensure that your Docker Desktop Application is open.
Run the following commands in sequence:
    docker volume create two-shot-pgdata
    docker compose build
    docker compose compose up
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#design)

## ➤ Design
Bootstrap.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](https://gitlab.com/dcamel/Wardrobify/-/tree/main/shoes-microservice)

## ➤ Shoes microservice

There are two models within Shoes:

The Shoe model contains the information regarding a specific shoe. We use the following fields:

- manufacturer: The manufacturer of the shoe.
- model_name: The model name of the shoe.
- color: The color of the shoe.
- picture_url: The URL of a picture of the shoe.
- bin: The foreign key pointing to the bin where the shoe is stored.

The BinVO model is a ValueObject representing a bin in the wardrobe. It contains the following fields:

- import_href: A unique URL for importing the bin.
- name: The name of the bin.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#hats-microservice)

## ➤ Hats microservice

There are two models within Hats:

The Hat model contains the information regarding a
specific hat.  We use the following fields:

    name, a nickname for the particular hat
    fabric, the type of fabric
    style_name, the name of the hat's style
    color, the color of the hat
    pic_url, the URL of a picture of the hat

    location, the foreign key pointing to the
        closet the hat is stored in

The LocationVO is a ValueObject of the Wardrobe Location.
Here, the information for the matching Wardrobe Location
is maintained through the use of the poller.

The Hat's poller is set to automatically synch the
LocationVO's list to match the entries of Wardrobe's
Location Model.
