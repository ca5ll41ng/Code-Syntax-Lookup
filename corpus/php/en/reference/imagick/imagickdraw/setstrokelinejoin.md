---
id: "en-php-function-imagickdraw-setstrokelinejoin"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeLineJoin"
title: "Specifies the shape to be used at the corners of paths when they are stroked"
signature: "public bool ImagickDraw::setStrokeLineJoin(int $linejoin)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokelinejoin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the shape to be used at the corners of paths when they are stroked

## Description

```php
public bool ImagickDraw::setStrokeLineJoin(int $linejoin)
```

> This function is currently not documented; only its argument list is available.

Specifies the shape to be used at the corners of paths (or other vector shapes) when they are stroked.

## Parameters

- **`$linejoin`** — One of the LINEJOIN constant (`imagick::LINEJOIN_*`).

## Return Values

No value is returned.

## Examples

**`ImagickDraw::setStrokeLineJoin()` example**

```php

      
<?php
function setStrokeLineJoin($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeWidth(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(20);

    $offset = 220;

    $lineJoinStyle = [
        \Imagick::LINEJOIN_MITER,
        \Imagick::LINEJOIN_ROUND,
        \Imagick::LINEJOIN_BEVEL,
        ];

    for ($x = 0; $x < count($lineJoinStyle); $x++) {
        $draw->setStrokeLineJoin($lineJoinStyle[$x]);
        $points = [
            ['x' => 40 * 5, 'y' => 10 * 5 + $x * $offset],
            ['x' => 20 * 5, 'y' => 20 * 5 + $x * $offset],
            ['x' => 70 * 5, 'y' => 50 * 5 + $x * $offset],
            ['x' => 40 * 5, 'y' => 10 * 5 + $x * $offset],
        ];

        $draw->polyline($points);
    }

    $image = new \Imagick();
    $image->newImage(500, 700, $backgroundColor);
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
