---
id: "en-php-function-gmagick-motionblurimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::motionblurimage"
title: "Simulates motion blur"
signature: "public Gmagick Gmagick::motionblurimage(float $radius, float $sigma, float $angle)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.motionblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates motion blur

## Description

```php
public Gmagick Gmagick::motionblurimage(float $radius, float $sigma, float $angle)
```

Simulates motion blur. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and `Gmagick::motionblurimage()` selects a suitable radius for you. Angle gives the angle of the blurring motion.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel.
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.
- **`$angle`** — Apply the effect along this angle.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
