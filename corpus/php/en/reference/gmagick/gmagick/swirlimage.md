---
id: "en-php-function-gmagick-swirlimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::swirlimage"
title: "Swirls the pixels about the center of the image"
signature: "public Gmagick Gmagick::swirlimage(float $degrees)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.swirlimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Swirls the pixels about the center of the image

## Description

```php
public Gmagick Gmagick::swirlimage(float $degrees)
```

Swirls the pixels about the center of the image, where degrees indicates the sweep of the arc through which each pixel is moved. You get a more dramatic effect as the degrees move from 1 to 360.

## Parameters

- **`$degrees`** — Define the tightness of the swirling effect.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
