---
id: "en-php-function-imagickdraw-setstrokecolor"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeColor"
title: "Sets the color used for stroking object outlines"
signature: "public bool ImagickDraw::setStrokeColor(ImagickPixel|string $color)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokecolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the color used for stroking object outlines

## Description

```php
public bool ImagickDraw::setStrokeColor(ImagickPixel|string $color)
```

> This function is currently not documented; only its argument list is available.

Sets the color used for stroking object outlines.

## Parameters

- **`$color`** — the stroke color

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeColor()` example**

```php

      
<?php
function setStrokeColor($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(5);

    $draw->line(100, 100, 400, 145);
    $draw->rectangle(100, 200, 225, 350);

    $draw->setStrokeOpacity(0.1);
    $draw->line(100, 120, 400, 165);
    $draw->rectangle(275, 200, 400, 350);

    $image = new \Imagick();
    $image->newImage(500, 400, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
