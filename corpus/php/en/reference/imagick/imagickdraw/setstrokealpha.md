---
id: "en-php-function-imagickdraw-setstrokealpha"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeAlpha"
title: "Specifies the opacity of stroked object outlines"
signature: "public bool ImagickDraw::setStrokeAlpha(float $alpha)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokealpha.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the opacity of stroked object outlines

## Description

```php
public bool ImagickDraw::setStrokeAlpha(float $alpha)
```

> This function is currently not documented; only its argument list is available.

Specifies the opacity of stroked object outlines.

## Parameters

- **`$alpha`** — opacity

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeAlpha()` example**

```php

      
<?php
function setStrokeAlpha($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(4);
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
