---
id: "en-php-function-imagick-getimagepixelcolor"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImagePixelColor"
title: "Returns the color of the specified pixel"
signature: "public ImagickPixel Imagick::getImagePixelColor(int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagepixelcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the color of the specified pixel

## Description

```php
public ImagickPixel Imagick::getImagePixelColor(int $x, int $y)
```

Returns the color of the specified pixel.

## Parameters

- **`$x`** — The x-coordinate of the pixel
- **`$y`** — The y-coordinate of the pixel

## Return Values

Returns an ImagickPixel instance for the color at the coordinates given.

## Errors/Exceptions

Throws ImagickException on error.
