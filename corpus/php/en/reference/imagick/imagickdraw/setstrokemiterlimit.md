---
id: "en-php-function-imagickdraw-setstrokemiterlimit"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeMiterLimit"
title: "Specifies the miter limit"
signature: "public bool ImagickDraw::setStrokeMiterLimit(int $miterlimit)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokemiterlimit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the miter limit

## Description

```php
public bool ImagickDraw::setStrokeMiterLimit(int $miterlimit)
```

> This function is currently not documented; only its argument list is available.

Specifies the miter limit. When two line segments meet at a sharp angle and miter joins have been specified for 'lineJoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path. The miterLimit' imposes a limit on the ratio of the miter length to the 'lineWidth'.

## Parameters

- **`$miterlimit`** — the miter limit

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeMiterLimit()` example**

```php

      
<?php
function setStrokeMiterLimit($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setStrokeOpacity(0.6);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(10);

    $yOffset = 100;

    $draw->setStrokeLineJoin(\Imagick::LINEJOIN_MITER);

    for ($y = 0; $y < 3; $y++) {

        $draw->setStrokeMiterLimit(40 * $y);

        $points = [
            ['x' => 22 * 3, 'y' => 15 * 4 + $y * $yOffset],
            ['x' => 20 * 3, 'y' => 20 * 4 + $y * $yOffset],
            ['x' => 70 * 5, 'y' => 45 * 4 + $y * $yOffset],
        ];

        $draw->polygon($points);
    }

    $image = new \Imagick();
    $image->newImage(500, 500, $backgroundColor);
    $image->setImageFormat("png");
    $image->drawImage($draw);

    $image->setImageType(\Imagick::IMGTYPE_PALETTE);
    $image->setImageCompressionQuality(100);
    $image->stripImage();

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
