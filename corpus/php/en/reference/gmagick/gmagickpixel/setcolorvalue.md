---
id: "en-php-function-gmagickpixel-setcolorvalue"
language: "php"
lang: "en"
category: "function"
name: "GmagickPixel::setcolorvalue"
title: "Sets the normalized value of one of the channels"
signature: "public GmagickPixel GmagickPixel::setcolorvalue(int $color, float $value)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickpixel.setcolorvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the normalized value of one of the channels

## Description

```php
public GmagickPixel GmagickPixel::setcolorvalue(int $color, float $value)
```

Sets the value of the specified channel of this object to the provided value, which should be between 0 and 1. This function can be used to provide an opacity channel to a `GmagickPixel` object.

## Parameters

- **`$color`** — One of the Gmagick channel color constants.
- **`$value`** — The value to set this channel to, ranging from 0 to 1.

## Return Values

The `GmagickPixel` object.
