---
id: "en-php-function-imagickdraw-skewx"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::skewX"
title: "Skews the current coordinate system in the horizontal direction"
signature: "public bool ImagickDraw::skewX(float $degrees)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.skewx.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Skews the current coordinate system in the horizontal direction

## Description

```php
public bool ImagickDraw::skewX(float $degrees)
```

> This function is currently not documented; only its argument list is available.

Skews the current coordinate system in the horizontal direction.

## Parameters

- **`$degrees`** — degrees to skew

## Return Values

No value is returned.

## Examples

**`ImagickDraw::skewX()` example**

```php

      
<?php
function skewX($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor, 
               $startX, $startY, $endX, $endY, $skew) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(2);
    $draw->setFillColor($fillColor);
    $draw->rectangle($startX, $startY, $endX, $endY);
    $draw->setFillColor($fillModifiedColor);
    $draw->skewX($skew);
    $draw->rectangle($startX, $startY, $endX, $endY);

    $image = new \Imagick();
    $image->newImage(500, 500, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
