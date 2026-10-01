---
id: "en-php-function-imagickdraw-setstrokewidth"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeWidth"
title: "Sets the width of the stroke used to draw object outlines"
signature: "public bool ImagickDraw::setStrokeWidth(float $width)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokewidth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the width of the stroke used to draw object outlines

## Description

```php
public bool ImagickDraw::setStrokeWidth(float $width)
```

> This function is currently not documented; only its argument list is available.

Sets the width of the stroke used to draw object outlines.

## Parameters

- **`$width`** — stroke width

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeWidth()` example**

```php

      
<?php
function setStrokeWidth($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->line(100, 100, 400, 145);
    $draw->rectangle(100, 200, 225, 350);
    $draw->setStrokeWidth(5);
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
