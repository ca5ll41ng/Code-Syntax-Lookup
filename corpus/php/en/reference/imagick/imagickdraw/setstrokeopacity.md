---
id: "en-php-function-imagickdraw-setstrokeopacity"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeOpacity"
title: "Specifies the opacity of stroked object outlines"
signature: "public bool ImagickDraw::setStrokeOpacity(float $opacity)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokeopacity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the opacity of stroked object outlines

## Description

```php
public bool ImagickDraw::setStrokeOpacity(float $opacity)
```

> This function is currently not documented; only its argument list is available.

Specifies the opacity of stroked object outlines.

## Parameters

- **`$opacity`** — stroke opacity. 1.0 is fully opaque

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeOpacity()` example**

```php

      
<?php
function setStrokeOpacity($strokeColor, $fillColor, $backgroundColor) {
    $draw = new \ImagickDraw();

    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(10);
    $draw->setStrokeOpacity(1);
    $draw->line(100, 80, 400, 125);
    $draw->rectangle(25, 200, 150, 350);
    $draw->setStrokeOpacity(0.5);
    $draw->line(100, 100, 400, 145);
    $draw->rectangle(200, 200, 325, 350);
    $draw->setStrokeOpacity(0.2);
    $draw->line(100, 120, 400, 165);
    $draw->rectangle(375, 200, 500, 350);

    $image = new \Imagick();
    $image->newImage(550, 400, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
