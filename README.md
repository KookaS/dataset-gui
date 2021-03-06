# dataset-gui

GUI to visuallize and manage the scraper interactively.

Wanted images are the validated images used for training.
Pending images are the images waiting to be treated for training.
Unwanted images are the undesired images.
Wanted tags are the ones used in queries for scraping.
Unwanted tags are used to filter the photos.
Unwanted users is for skipping some users that have unrelevant content and confusing tags.

![image_page](/images/page.png)

Drawing mode can add bounding boxes for manual labeling.

![draw](/images/draw.png)

Croping mode can crop in square shape the photo and keep the bounding boxes within the new dimensions.

![image_page](/images/crop.png)

## install

NodeJS:

https://github.com/nodesource/distributions/blob/master/README.md

packages:

    npm i

## run

    npm run dev

## lint

    npm run lint

## .env

    NEXT_PUBLIC_API_URL=http://localhost:8080