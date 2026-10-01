---
id: "en-php-function-imagick-getimagedistortion"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageDistortion"
title: "Compares an image to a reconstructed image"
signature: "public float Imagick::getImageDistortion(MagickWand $reference, int $metric)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagedistortion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares an image to a reconstructed image

## Description

```php
public float Imagick::getImageDistortion(MagickWand $reference, int $metric)
```

Compares an image to a reconstructed image and returns the specified distortion metric.

## Parameters

- **`$reference`** — Imagick object to compare to.
- **`$metric`** — One of the metric type constants.

## Return Values

Returns the distortion metric used on the image (or the best guess thereof).

## Errors/Exceptions

Throws ImagickException on error.
