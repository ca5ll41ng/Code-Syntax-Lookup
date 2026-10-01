---
id: "en-php-function-gmagick-resampleimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::resampleimage"
title: "Resample image to desired resolution"
signature: "public Gmagick Gmagick::resampleimage(float $xResolution, float $yResolution, int $filter, float $blur)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.resampleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resample image to desired resolution

## Description

```php
public Gmagick Gmagick::resampleimage(float $xResolution, float $yResolution, int $filter, float $blur)
```

Resample image to desired resolution.

## Parameters

- **`$xResolution`** — The new image x resolution.
- **`$yResolution`** — The new image y resolution.
- **`$filter`** — Image filter to use.
- **`$blur`** — The blur factor where larger than 1 is blurry, smaller than 1 is sharp.

## Return Values

The Gmagick object on success

## Errors/Exceptions

Throws an `GmagickException` on error.
