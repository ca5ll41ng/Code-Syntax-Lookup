---
id: "en-php-function-imagickpixel-getcolorvaluequantum"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::getColorValueQuantum"
title: "Gets the quantum value of a color in the ImagickPixel"
signature: "public int|float ImagickPixel::getColorValueQuantum(int $color)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.getcolorvaluequantum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the quantum value of a color in the ImagickPixel

## Description

```php
public int|float ImagickPixel::getColorValueQuantum(int $color)
```

Gets the quantum value of a color in the ImagickPixel. Return value is a float if ImageMagick was compiled with HDRI, otherwise an integer.

## Parameters

This function has no parameters.

## Return Values

The quantum value of the color element. Float if ImageMagick was compiled with HDRI, otherwise an int.

## Examples

**`ImagickPixel::getColorValueQuantum()`**

```php

      
<?php
        $color = new \ImagickPixel('rgb(128, 5, 255)');
        $colorRed = $color->getColorValueQuantum(\Imagick::COLOR_RED);
        $colorGreen = $color->getColorValueQuantum(\Imagick::COLOR_GREEN);
        $colorBlue = $color->getColorValueQuantum(\Imagick::COLOR_BLUE);
        $colorAlpha = $color->getColorValueQuantum(\Imagick::COLOR_ALPHA);

        printf(
            "Red: %s Green: %s  Blue %s Alpha: %s",
            $colorRed,
            $colorGreen,
            $colorBlue,
            $colorAlpha
        );

?>

      
```
