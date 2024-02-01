# Wardrobify

Team:
* Damien Camel - Hats
* Justin Leopard - Shoes

## Design
Bootstrap, following Fearless styling.

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice

Explain your models and integration with the wardrobe
microservice, here.
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
