---
id: "en-php-function-imagickdraw-circle"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::circle"
title: "Draws a circle"
signature: "public bool ImagickDraw::circle(float $origin_x, float $origin_y, float $perimeter_x, float $perimeter_y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.circle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a circle

## Description

```php
public bool ImagickDraw::circle(float $origin_x, float $origin_y, float $perimeter_x, float $perimeter_y)
```

> This function is currently not documented; only its argument list is available.

Draws a circle on the image.

## Parameters

- **`$origin_x`** — origin x coordinate
- **`$origin_y`** — origin y coordinate
- **`$perimeter_x`** — perimeter x coordinate
- **`$perimeter_y`** — perimeter y coordinate

## Return Values

No value is returned.

## Examples

**`ImagickDraw::circle()` example**

```php

      
<?php
function circle($strokeColor, $fillColor, $backgroundColor, $originX, $originY, $endX, $endY) {

    //Create a ImagickDraw object to draw into.
    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->circle($originX, $originY, $endX, $endY);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
