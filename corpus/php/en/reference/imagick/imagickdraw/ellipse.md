---
id: "en-php-function-imagickdraw-ellipse"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::ellipse"
title: "Draws an ellipse on the image"
signature: "public bool ImagickDraw::ellipse(float $origin_x, float $origin_y, float $radius_x, float $radius_y, float $angle_start, float $angle_end)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.ellipse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws an ellipse on the image

## Description

```php
public bool ImagickDraw::ellipse(float $origin_x, float $origin_y, float $radius_x, float $radius_y, float $angle_start, float $angle_end)
```

> This function is currently not documented; only its argument list is available.

Draws an ellipse on the image.

## Parameters

- **`$origin_x`**
- **`$origin_y`**
- **`$radius_x`**
- **`$radius_y`**
- **`$angle_start`**
- **`$angle_end`**

## Return Values

No value is returned.

## Examples

**`ImagickDraw::ellipse()` example**

```php

      
<?php
function ellipse($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);
    $draw->setFontSize(72);

    $draw->ellipse(125, 70, 100, 50, 0, 360);
    $draw->ellipse(350, 70, 100, 50, 0, 315);

    $draw->push();
    $draw->translate(125, 250);
    $draw->rotate(30);
    $draw->ellipse(0, 0, 100, 50, 0, 360);
    $draw->pop();

    $draw->push();
    $draw->translate(350, 250);
    $draw->rotate(30);
    $draw->ellipse(0, 0, 100, 50, 0, 315);
    $draw->pop();

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
