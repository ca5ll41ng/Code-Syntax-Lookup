---
id: "en-php-function-imagickdraw-setclipunits"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setClipUnits"
title: "Sets the interpretation of clip path units"
signature: "public bool ImagickDraw::setClipUnits(int $pathunits)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setclipunits.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the interpretation of clip path units

## Description

```php
public bool ImagickDraw::setClipUnits(int $pathunits)
```

> This function is currently not documented; only its argument list is available.

Sets the interpretation of clip path units.

## Parameters

- **`$pathunits`** — the number of clip units

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setClipUnits()` example**

```php

      
<?php
function setClipUnits($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);
    $clipPathName = 'testClipPath';
    $draw->setClipUnits(\Imagick::RESOLUTION_PIXELSPERINCH);
    $draw->pushClipPath($clipPathName);
    $draw->rectangle(0, 0, 250, 250);
    $draw->popClipPath();
    $draw->setClipPath($clipPathName);

    //RESOLUTION_PIXELSPERINCH
    //RESOLUTION_PIXELSPERCENTIMETER

    $draw->rectangle(200, 200, 300, 300);
    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
