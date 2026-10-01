---
id: "en-php-function-gmagick-cropimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::cropimage"
title: "Extracts a region of the image"
signature: "public Gmagick Gmagick::cropimage(int $width, int $height, int $x, int $y)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.cropimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts a region of the image

## Description

```php
public Gmagick Gmagick::cropimage(int $width, int $height, int $x, int $y)
```

Extracts a region of the image.

## Parameters

- **`$width`** — The width of the crop.
- **`$height`** — The height of the crop.
- **`$x`** — The X coordinate of the cropped region's top left corner.
- **`$y`** — The Y coordinate of the cropped region's top left corner.

## Return Values

The cropped `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
