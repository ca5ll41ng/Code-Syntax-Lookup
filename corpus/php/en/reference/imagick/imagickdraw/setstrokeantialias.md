---
id: "en-php-function-imagickdraw-setstrokeantialias"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeAntialias"
title: "Controls whether stroked outlines are antialiased"
signature: "public bool ImagickDraw::setStrokeAntialias(bool $enabled)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokeantialias.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Controls whether stroked outlines are antialiased

## Description

```php
public bool ImagickDraw::setStrokeAntialias(bool $enabled)
```

> This function is currently not documented; only its argument list is available.

Controls whether stroked outlines are antialiased. Stroked outlines are antialiased by default. When antialiasing is disabled stroked pixels are thresholded to determine if the stroke color or underlying canvas color should be used.

## Parameters

- **`$enabled`** — the antialias setting

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeAntialias()` example**

```php

      
<?php
function setStrokeAntialias($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setStrokeAntialias(false);
    $draw->line(100, 100, 400, 105);

    $draw->line(100, 140, 400, 185);

    $draw->setStrokeAntialias(true);
    $draw->line(100, 110, 400, 115);
    $draw->line(100, 150, 400, 195);

    $image = new \Imagick();
    $image->newImage(500, 250, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
