---
id: "en-php-function-imagickpixel-getcolorquantum"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::getColorQuantum"
title: "Returns the color of the pixel in an array as Quantum values"
signature: "public array ImagickPixel::getColorQuantum()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.getcolorquantum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the color of the pixel in an array as Quantum values

## Description

```php
public array ImagickPixel::getColorQuantum()
```

Returns the color of the pixel in an array as Quantum values. If ImageMagick was compiled as HDRI these will be floats, otherwise they will be integers.

> This function is currently not documented; only its argument list is available.

## Parameters

This function has no parameters.

## Return Values

Returns an array with keys `"r"`, `"g"`, `"b"`, `"a"`.
