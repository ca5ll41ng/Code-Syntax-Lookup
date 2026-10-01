---
id: "en-php-function-imagickdraw-scale"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::scale"
title: "Adjusts the scaling factor"
signature: "public bool ImagickDraw::scale(float $x, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.scale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adjusts the scaling factor

## Description

```php
public bool ImagickDraw::scale(float $x, float $y)
```

> This function is currently not documented; only its argument list is available.

Adjusts the scaling factor to apply in the horizontal and vertical directions to the current coordinate space.

## Parameters

- **`$x`** — horizontal factor
- **`$y`** — vertical factor

## Return Values

No value is returned.

## Examples

**`ImagickDraw::scale()` example**

```php

      
<?php
function scale($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(4);
    $draw->setFillColor($fillColor);
    $draw->rectangle(200, 200, 300, 300);
    $draw->setFillColor($fillModifiedColor);
    $draw->scale(1.4, 1.4);
    $draw->rectangle(200, 200, 300, 300);

    $image = new \Imagick();
    $image->newImage(500, 500, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
