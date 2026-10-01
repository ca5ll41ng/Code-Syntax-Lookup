---
id: "en-php-function-gmagick-mapimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::mapimage"
title: "Replaces the colors of an image with the closest color from a reference image"
signature: "public Gmagick Gmagick::mapimage(gmagick $gmagick, bool $dither)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.mapimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces the colors of an image with the closest color from a reference image

## Description

```php
public Gmagick Gmagick::mapimage(gmagick $gmagick, bool $dither)
```

Replaces the colors of an image with the closest color from a reference image.

## Parameters

- **`$gmagick`** — The reference image.
- **`$dither`** — Set this integer value to something other than zero to dither the mapped image.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
