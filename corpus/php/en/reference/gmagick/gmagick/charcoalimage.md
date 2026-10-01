---
id: "en-php-function-gmagick-charcoalimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::charcoalimage"
title: "Simulates a charcoal drawing"
signature: "public Gmagick Gmagick::charcoalimage(float $radius, float $sigma)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.charcoalimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates a charcoal drawing

## Description

```php
public Gmagick Gmagick::charcoalimage(float $radius, float $sigma)
```

Simulates a charcoal drawing.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel.
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.

## Return Values

The `Gmagick` object with charcoal simulation.

## Errors/Exceptions

Throws an `GmagickException` on error.
