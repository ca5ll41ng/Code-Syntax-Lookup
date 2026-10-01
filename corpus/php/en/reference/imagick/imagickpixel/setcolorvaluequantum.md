---
id: "en-php-function-imagickpixel-setcolorvaluequantum"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::setColorValueQuantum"
title: "Sets the quantum value of a color element of the ImagickPixel"
signature: "public bool ImagickPixel::setColorValueQuantum(int $color, int|float $value)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.setcolorvaluequantum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the quantum value of a color element of the ImagickPixel

## Description

```php
public bool ImagickPixel::setColorValueQuantum(int $color, int|float $value)
```

Sets the quantum value of a color element of the ImagickPixel.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$color`** — Which color element to set e.g. \Imagick::COLOR_GREEN.
- **`$value`** — The quantum value to set the color element to. This should be a float if ImageMagick was compiled with HDRI otherwise an int in the range 0 to Imagick::getQuantum().

## Return Values

Returns `true` on success.

## Examples

**`ImagickPixel::setColorValueQuantum()`**

```php

      
<?php
function setColorValueQuantum() {
    $image = new \Imagick();

    $quantumRange = $image->getQuantumRange();

    $draw = new \ImagickDraw();
    $color = new \ImagickPixel('blue');
    $color->setcolorValueQuantum(\Imagick::COLOR_RED, 128 * $quantumRange['quantumRangeLong'] / 256);

    $draw->setstrokewidth(1.0);
    $draw->setStrokeColor($color);
    $draw->setFillColor($color);
    $draw->rectangle(200, 200, 300, 300);

    $image->newImage(500, 500, "SteelBlue2");
    $image->setImageFormat("png");

    $image->drawImage($draw);

    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>

      
```
