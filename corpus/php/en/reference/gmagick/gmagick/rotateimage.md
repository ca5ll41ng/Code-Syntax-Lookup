---
id: "en-php-function-gmagick-rotateimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::rotateimage"
title: "Rotates an image"
signature: "public Gmagick Gmagick::rotateimage(mixed $color, float $degrees)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.rotateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rotates an image

## Description

```php
public Gmagick Gmagick::rotateimage(mixed $color, float $degrees)
```

Rotates an image the specified number of degrees. Empty triangles left over from rotating the image are filled with the background color.

## Parameters

- **`$color`** — The background pixel.
- **`$degrees`** — The number of degrees to rotate the image.

## Return Values

The Gmagick object on success

## Errors/Exceptions

Throws an `GmagickException` on error.
