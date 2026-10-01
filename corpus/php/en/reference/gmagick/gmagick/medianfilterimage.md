---
id: "en-php-function-gmagick-medianfilterimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::medianfilterimage"
title: "Applies a digital filter"
signature: "public void Gmagick::medianfilterimage(float $radius)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.medianfilterimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a digital filter

## Description

```php
public void Gmagick::medianfilterimage(float $radius)
```

Applies a digital filter that improves the quality of a noisy image. Each pixel is replaced by the median in a set of neighboring pixels as defined by radius.

## Parameters

- **`$radius`** — The radius of the pixel neighborhood.

## Return Values

`Gmagick` object with median filter applied.

## Errors/Exceptions

Throws an `GmagickException` on error.
