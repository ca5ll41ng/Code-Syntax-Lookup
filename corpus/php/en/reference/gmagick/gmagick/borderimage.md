---
id: "en-php-function-gmagick-borderimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::borderimage"
title: "Surrounds the image with a border"
signature: "public Gmagick Gmagick::borderimage(GmagickPixel $color, int $width, int $height)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.borderimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Surrounds the image with a border

## Description

```php
public Gmagick Gmagick::borderimage(GmagickPixel $color, int $width, int $height)
```

Surrounds the image with a border of the color defined by the bordercolor `GmagickPixel` object or a color string.

## Parameters

- **`$color`** — `GmagickPixel` object or a string containing the border color.
- **`$width`** — Border width.
- **`$height`** — Border height.

## Return Values

The `Gmagick` object with border defined.

## Errors/Exceptions

Throws an `GmagickException` on error.
