---
id: "en-php-function-gmagick-gammaimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::gammaimage"
title: "Gamma-corrects an image"
signature: "public Gmagick Gmagick::gammaimage(float $gamma)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.gammaimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gamma-corrects an image

## Description

```php
public Gmagick Gmagick::gammaimage(float $gamma)
```

Gamma-corrects an image. The same image viewed on different devices will have perceptual differences in the way the image's intensities are represented on the screen. Specify individual gamma levels for the red, green, and blue channels, or adjust all three with the gamma parameter. Values typically range from 0.8 to 2.3.

## Parameters

- **`$gamma`** — The amount of gamma-correction.

## Return Values

The gamma corrected `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
