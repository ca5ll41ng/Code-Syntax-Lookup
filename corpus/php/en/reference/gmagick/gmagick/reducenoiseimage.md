---
id: "en-php-function-gmagick-reducenoiseimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::reducenoiseimage"
title: "Smooths the contours of an image"
signature: "public Gmagick Gmagick::reducenoiseimage(float $radius)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.reducenoiseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Smooths the contours of an image

## Description

```php
public Gmagick Gmagick::reducenoiseimage(float $radius)
```

Smooths the contours of an image while still preserving edge information. The algorithm works by replacing each pixel with its neighbor closest in value. A neighbor is defined by radius. Use a radius of 0 and `Gmagick::reducenoiseimage()` selects a suitable radius for you.

## Parameters

- **`$radius`** — The radius of the pixel neighborhood.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
