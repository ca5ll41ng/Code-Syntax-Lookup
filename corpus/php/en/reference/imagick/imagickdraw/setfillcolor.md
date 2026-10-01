---
id: "en-php-function-imagickdraw-setfillcolor"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFillColor"
title: "Sets the fill color to be used for drawing filled objects"
signature: "public bool ImagickDraw::setFillColor(ImagickPixel|string $fill_color)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfillcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the fill color to be used for drawing filled objects

## Description

```php
public bool ImagickDraw::setFillColor(ImagickPixel|string $fill_color)
```

> This function is currently not documented; only its argument list is available.

Sets the fill color to be used for drawing filled objects.

## Parameters

- **`$fill_color`** — ImagickPixel to use to set the color

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setFillColor()`**

```php

      
<?php
function setFillColor($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(1.5);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->rectangle(50, 50, 150, 150);

    $draw->setFillColor("rgb(200, 32, 32)");
    $draw->rectangle(200, 50, 300, 150);

    $image = new \Imagick();
    $image->newImage(500, 500, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
