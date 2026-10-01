---
id: "en-php-function-imagickdraw-setstrokelinecap"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeLineCap"
title: "Specifies the shape to be used at the end of open subpaths when they are stroked"
signature: "public bool ImagickDraw::setStrokeLineCap(int $linecap)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokelinecap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the shape to be used at the end of open subpaths when they are stroked

## Description

```php
public bool ImagickDraw::setStrokeLineCap(int $linecap)
```

> This function is currently not documented; only its argument list is available.

Specifies the shape to be used at the end of open subpaths when they are stroked.

## Parameters

- **`$linecap`** — One of the LINECAP constant (`imagick::LINECAP_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeLineCap()` example**

```php

      
<?php
function setStrokeLineCap($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(25);

    $lineTypes = [\Imagick::LINECAP_BUTT, \Imagick::LINECAP_ROUND, \Imagick::LINECAP_SQUARE,];

    $offset = 0;

    foreach ($lineTypes as $lineType) {
        $draw->setStrokeLineCap($lineType);
        $draw->line(50 + $offset, 50, 50 + $offset, 250);
        $offset += 50;
    }

    $imagick = new \Imagick();
    $imagick->newImage(300, 300, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>

      
```
