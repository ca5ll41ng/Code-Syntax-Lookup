---
id: "en-php-function-gmagick-embossimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::embossimage"
title: "Returns a grayscale image with a three-dimensional effect"
signature: "public Gmagick Gmagick::embossimage(float $radius, float $sigma)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.embossimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a grayscale image with a three-dimensional effect

## Description

```php
public Gmagick Gmagick::embossimage(float $radius, float $sigma)
```

Returns a grayscale image with a three-dimensional effect. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and it will choose a suitable radius for you.

## Parameters

- **`$radius`** — The radius of the effect.
- **`$sigma`** — The sigma of the effect.

## Return Values

The embossed `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
