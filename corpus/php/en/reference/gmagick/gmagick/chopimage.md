---
id: "en-php-function-gmagick-chopimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::chopimage"
title: "Removes a region of an image and trims"
signature: "public Gmagick Gmagick::chopimage(int $width, int $height, int $x, int $y)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.chopimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Removes a region of an image and trims

## Description

```php
public Gmagick Gmagick::chopimage(int $width, int $height, int $x, int $y)
```

Removes a region of an image and collapses the image to occupy the removed portion.

## Parameters

- **`$width`** — Width of the chopped area.
- **`$height`** — Height of the chopped area.
- **`$x`** — X origo of the chopped area.
- **`$y`** — Y origo of the chopped area.

## Return Values

The chopped `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
