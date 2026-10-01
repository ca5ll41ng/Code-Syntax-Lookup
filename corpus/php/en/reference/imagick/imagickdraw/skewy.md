---
id: "en-php-function-imagickdraw-skewy"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::skewY"
title: "Skews the current coordinate system in the vertical direction"
signature: "public bool ImagickDraw::skewY(float $degrees)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.skewy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Skews the current coordinate system in the vertical direction

## Description

```php
public bool ImagickDraw::skewY(float $degrees)
```

> This function is currently not documented; only its argument list is available.

Skews the current coordinate system in the vertical direction.

## Parameters

- **`$degrees`** — degrees to skew

## Return Values

No value is returned.

## Examples

**`ImagickDraw::skewY()` example**

```php

      
<?php
function skewY($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor, 
               $startX, $startY, $endX, $endY, $skew) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeWidth(2);
    $draw->setFillColor($fillColor);
    $draw->rectangle($startX, $startY, $endX, $endY);
    $draw->setFillColor($fillModifiedColor);
    $draw->skewY($skew);
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
