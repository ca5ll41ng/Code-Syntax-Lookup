---
id: "en-php-function-gmagick-frameimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::frameimage"
title: "Adds a simulated three-dimensional border"
signature: "public Gmagick Gmagick::frameimage(GmagickPixel $color, int $width, int $height, int $inner_bevel, int $outer_bevel)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.frameimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds a simulated three-dimensional border

## Description

```php
public Gmagick Gmagick::frameimage(GmagickPixel $color, int $width, int $height, int $inner_bevel, int $outer_bevel)
```

Adds a simulated three-dimensional border around the image. The width and height specify the border width of the vertical and horizontal sides of the frame. The inner and outer bevels indicate the width of the inner and outer shadows of the frame.

## Parameters

- **`$color`** — `GmagickPixel` object or a float representing the matte color.
- **`$width`** — The width of the border.
- **`$height`** — The height of the border.
- **`$inner_bevel`** — The inner bevel width.
- **`$outer_bevel`** — The outer bevel width.

## Return Values

The framed `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
