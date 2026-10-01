---
id: "en-php-function-imagick-getimageregion"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageRegion"
title: "Extracts a region of the image"
signature: "public Imagick Imagick::getImageRegion(int $width, int $height, int $x, int $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageregion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Extracts a region of the image

## Description

```php
public Imagick Imagick::getImageRegion(int $width, int $height, int $x, int $y)
```

Extracts a region of the image and returns it as a new Imagick object.

## Parameters

- **`$width`** — The width of the extracted region.
- **`$height`** — The height of the extracted region.
- **`$x`** — X-coordinate of the top-left corner of the extracted region.
- **`$y`** — Y-coordinate of the top-left corner of the extracted region.

## Return Values

Extracts a region of the image and returns it as a new wand.

## Errors/Exceptions

Throws ImagickException on error.
