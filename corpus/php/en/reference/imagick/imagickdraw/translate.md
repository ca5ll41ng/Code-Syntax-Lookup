---
id: "en-php-function-imagickdraw-translate"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::translate"
title: "Applies a translation to the current coordinate system"
signature: "public bool ImagickDraw::translate(float $x, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.translate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a translation to the current coordinate system

## Description

```php
public bool ImagickDraw::translate(float $x, float $y)
```

> This function is currently not documented; only its argument list is available.

Applies a translation to the current coordinate system which moves the coordinate system origin to the specified coordinate.

## Parameters

- **`$x`** — horizontal translation
- **`$y`** — vertical translation

## Return Values

No value is returned.

## Examples

**`ImagickDraw::translate()` example**

```php

      
<?php
function translate($strokeColor, $fillColor, $backgroundColor, $fillModifiedColor, 
                   $startX, $startY, $endX, $endY, $translateX, $translateY) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->rectangle($startX, $startY, $endX, $endY);

    $draw->setFillColor($fillModifiedColor);
    $draw->translate($translateX, $translateY);
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
