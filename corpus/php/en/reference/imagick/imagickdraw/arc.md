---
id: "en-php-function-imagickdraw-arc"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::arc"
title: "Draws an arc"
signature: "public bool ImagickDraw::arc(float $start_x, float $start_y, float $end_x, float $end_y, float $start_angle, float $end_angle)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.arc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws an arc

## Description

```php
public bool ImagickDraw::arc(float $start_x, float $start_y, float $end_x, float $end_y, float $start_angle, float $end_angle)
```

> This function is currently not documented; only its argument list is available.

Draws an arc falling within a specified bounding rectangle on the image.

## Parameters

- **`$start_x`** — Starting x ordinate of bounding rectangle
- **`$start_y`** — starting y ordinate of bounding rectangle
- **`$end_x`** — ending x ordinate of bounding rectangle
- **`$end_y`** — ending y ordinate of bounding rectangle
- **`$start_angle`** — starting degrees of rotation
- **`$end_angle`** — ending degrees of rotation

## Return Values

No value is returned.

## Examples

**`ImagickDraw::arc()` example**

```php

      
<?php
function arc($strokeColor, $fillColor, $backgroundColor, $startX, $startY, $endX, $endY, $startAngle, $endAngle) {

    //Create a ImagickDraw object to draw into.
    $draw = new \ImagickDraw();
    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(2);

    $draw->arc($startX, $startY, $endX, $endY, $startAngle, $endAngle);

    //Create an image object which the draw commands can be rendered into
    $image = new \Imagick();
    $image->newImage(IMAGE_WIDTH, IMAGE_HEIGHT, $backgroundColor);
    $image->setImageFormat("png");

    //Render the draw commands in the ImagickDraw object 
    //into the image.
    $image->drawImage($draw);

    //Send the image to the browser
    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
