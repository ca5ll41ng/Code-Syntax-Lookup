---
id: "en-php-function-gmagickpixel-getcolorvalue"
language: "php"
lang: "en"
category: "function"
name: "GmagickPixel::getcolorvalue"
title: "Gets the normalized value of the provided color channel"
signature: "public float GmagickPixel::getcolorvalue(int $color)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickpixel.getcolorvalue.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the normalized value of the provided color channel

## Description

```php
public float GmagickPixel::getcolorvalue(int $color)
```

Retrieves the value of the color channel specified, as a floating-point number between 0 and 1.

## Parameters

- **`$color`** — The channel to check, specified as one of the Gmagick channel constants.

## Return Values

The value of the channel, as a normalized floating-point number, throwing `GmagickPixelException` on error.
