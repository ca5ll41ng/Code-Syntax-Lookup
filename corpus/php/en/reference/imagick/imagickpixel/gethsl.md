---
id: "en-php-function-imagickpixel-gethsl"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::getHSL"
title: "Returns the normalized HSL color of the ImagickPixel object"
signature: "public array ImagickPixel::getHSL()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.gethsl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the normalized HSL color of the ImagickPixel object

## Description

```php
public array ImagickPixel::getHSL()
```

Returns the normalized HSL color described by the ImagickPixel object, with each of the three values as floating point numbers between 0.0 and 1.0.

## Parameters

This function has no parameters.

## Return Values

Returns the HSL value in an array with the keys "hue", "saturation", and "luminosity". Throws ImagickPixelException on failure.

## Examples

**Basic `Imagick::getHSL()` example**

```php


<?php

$color = new ImagickPixel('rgb(90%, 10%, 10%)');

$colorInfo = $color->getHSL();

print_r($colorInfo);

?>

    
```

The above example will output:

```text


Array
(
    [hue] => 0
    [saturation] => 0.80001220740379
    [luminosity] => 0.50000762951095
)

    
```

## Notes

> Available with ImageMagick library version 6.2.9 and higher.
