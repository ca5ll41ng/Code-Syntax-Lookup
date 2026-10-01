---
id: "en-php-function-imagickpixel-getcolor"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::getColor"
title: "Returns the color"
signature: "public array ImagickPixel::getColor(int $normalized = 0)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.getcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the color

## Description

```php
public array ImagickPixel::getColor(int $normalized = 0)
```

Returns the color described by the ImagickPixel object, as an array. If the color has an opacity channel set, this is provided as a fourth value in the list.

## Parameters

- **`$normalized`** — Normalize the color values. Possible values are `0`, `1` or `2`.
  | `$normalized` | Description |
  | --- | --- |
  | `0` | The RGB values are returned as `int`s in the range `0` to `255` (inclusive.) The alpha value is returned as `int` and is either `0` or `1`. |
  | `1` | The RGBA values are returned as `float`s in the range `0` to `1` (inclusive.) |
  | `2` | The RGBA values are returned as `int`s in the range `0` to `255` (inclusive.) |



## Return Values

An array of channel values. Throws ImagickPixelException on error.

## Examples

**Basic `Imagick::getColor()` usage**

```php


<?php

//Create an ImagickPixel with the predefined color 'brown'
$color = new ImagickPixel('brown');

//Set the color to have an alpha of 25%
$color->setColorValue(Imagick::COLOR_ALPHA, 64 / 256.0);

$colorInfo = $color->getColor();

echo "Standard values".PHP_EOL;
print_r($colorInfo);

$colorInfo = $color->getColor(1);

echo "Normalized values:".PHP_EOL;
print_r($colorInfo);

?>

    
```

The above example will output:

```text

    
Standard values
Array
(
    [r] => 165
    [g] => 42
    [b] => 42
    [a] => 0
)
Normalized values:
Array
(
    [r] => 0.64705882352941
    [g] => 0.16470588235294
    [b] => 0.16470588235294
    [a] => 0.25000381475547
)
    
    
```
