---
id: "en-php-function-imagickdraw-setclippath"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setClipPath"
title: "Associates a named clipping path with the image"
signature: "public bool ImagickDraw::setClipPath(string $clip_mask)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setclippath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Associates a named clipping path with the image

## Description

```php
public bool ImagickDraw::setClipPath(string $clip_mask)
```

> This function is currently not documented; only its argument list is available.

Associates a named clipping path with the image. Only the areas drawn on by the clipping path will be modified as long as it remains in effect.

## Parameters

- **`$clip_mask`** — the clipping path name

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setClipPath()` example**

```php

      
<?php
function setClipPath($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeOpacity(1);
    $draw->setStrokeWidth(2);

    $clipPathName = 'testClipPath';

    $draw->pushClipPath($clipPathName);
    $draw->rectangle(0, 0, 250, 250);
    $draw->popClipPath();
    $draw->setClipPath($clipPathName);
    $draw->rectangle(100, 100, 400, 400);

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
