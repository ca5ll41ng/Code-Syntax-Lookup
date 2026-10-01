---
id: "en-php-function-gmagick-oilpaintimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::oilpaintimage"
title: "Simulates an oil painting"
signature: "public Gmagick Gmagick::oilpaintimage(float $radius)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.oilpaintimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates an oil painting

## Description

```php
public Gmagick Gmagick::oilpaintimage(float $radius)
```

Applies a special effect filter that simulates an oil painting. Each pixel is replaced by the most frequent color occurring in a circular region defined by radius.

## Parameters

- **`$radius`** — The radius of the circular neighborhood.

## Return Values

The Gmagick object on success

## Errors/Exceptions

Throws an `GmagickException` on error.
