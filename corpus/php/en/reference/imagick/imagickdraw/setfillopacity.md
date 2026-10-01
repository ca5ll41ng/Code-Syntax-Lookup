---
id: "en-php-function-imagickdraw-setfillopacity"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setFillOpacity"
title: "Sets the opacity to use when drawing using the fill color or fill texture"
signature: "public bool ImagickDraw::setFillOpacity(float $opacity)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setfillopacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the opacity to use when drawing using the fill color or fill texture

## Description

```php
public bool ImagickDraw::setFillOpacity(float $opacity)
```

> This function is currently not documented; only its argument list is available.

Sets the opacity to use when drawing using the fill color or fill texture. Fully opaque is 1.0.

## Parameters

- **`$opacity`** — the fill opacity

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setFillOpacity()`**

```php

      
<?php
function setFillOpacity($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $draw->rectangle(100, 200, 200, 300);

    $draw->setFillOpacity(0.4);
    $draw->rectangle(300, 200, 400, 300);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
