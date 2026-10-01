---
id: "en-php-function-imagickdraw-setstrokedasharray"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::setStrokeDashArray"
title: "Specifies the pattern of dashes and gaps used to stroke paths"
signature: "public bool ImagickDraw::setStrokeDashArray(array|null $dashes)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.setstrokedasharray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Specifies the pattern of dashes and gaps used to stroke paths

## Description

```php
public bool ImagickDraw::setStrokeDashArray(array|null $dashes)
```

> This function is currently not documented; only its argument list is available.

Specifies the pattern of dashes and gaps used to stroke paths. The strokeDashArray represents an array of numbers that specify the lengths of alternating dashes and gaps in pixels. If an odd number of values is provided, then the list of values is repeated to yield an even number of values. To remove an existing dash array, pass a zero number_elements argument and null dash_array. A typical strokeDashArray_ array might contain the members 5 3 2.

## Parameters

- **`$dashes`** — array of floats

## Return Values

Returns `true` on success.

## Examples

**`ImagickDraw::setStrokeDashArray()` example**

```php

      
<?php
function setStrokeDashArray($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(4);

    $draw->setStrokeDashArray([10, 10]);
    $draw->rectangle(100, 50, 225, 175);

    $draw->setStrokeDashArray([20, 5, 20, 5, 5, 5,]);
    $draw->rectangle(275, 50, 400, 175);

    $draw->setStrokeDashArray([20, 5, 20, 5, 5]);
    $draw->rectangle(100, 200, 225, 350);

    $draw->setStrokeDashArray([1, 1, 1, 1, 2, 2, 3, 3, 5, 5, 8, 8, 13, 13, 21, 21, 34, 34, 55, 55, 89, 89, 144, 144, 233, 233, 377, 377, 610, 610, 987, 987, 1597, 1597, 2584, 2584, 4181, 4181,]);

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
