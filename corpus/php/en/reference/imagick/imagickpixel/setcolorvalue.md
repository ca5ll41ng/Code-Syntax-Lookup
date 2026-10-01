---
id: "en-php-function-imagickpixel-setcolorvalue"
language: "php"
lang: "en"
category: "function"
name: "ImagickPixel::setColorValue"
title: "Sets the normalized value of one of the channels"
signature: "public bool ImagickPixel::setColorValue(int $color, float $value)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickpixel.setcolorvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the normalized value of one of the channels

## Description

```php
public bool ImagickPixel::setColorValue(int $color, float $value)
```

Sets the value of the specified channel of this object to the provided value, which should be between 0 and 1. This function can be used to provide an opacity channel to an ImagickPixel object.

## Parameters

- **`$color`** — One of the Imagick color constants e.g. \Imagick::COLOR_GREEN or \Imagick::COLOR_ALPHA.
- **`$value`** — The value to set this channel to, ranging from 0 to 1.

## Return Values

Returns `true` on success.

## Examples

**Basic `Imagick::setColorValue()` usage**

```php


<?php

$color  = new \ImagickPixel('firebrick');

$color->setColorValue(Imagick::COLOR_ALPHA, 0.5);

print_r($color->getcolor(true));
?>

    
```

The above example will output:

```text


Array
(
    [r] => 0.69803921568627
    [g] => 0.13333333333333
    [b] => 0.13333333333333
    [a] => 0.50000762951095
)

    
```
