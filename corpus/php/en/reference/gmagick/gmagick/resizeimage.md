---
id: "en-php-function-gmagick-resizeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::resizeimage"
title: "Scales an image"
signature: "public Gmagick Gmagick::resizeimage(int $width, int $height, int $filter, float $blur, bool $fit = false)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.resizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales an image

## Description

```php
public Gmagick Gmagick::resizeimage(int $width, int $height, int $filter, float $blur, bool $fit = false)
```

Scales an image to the desired dimensions with a filter.

## Parameters

- **`$width`** — The number of columns in the scaled image.
- **`$height`** — The number of rows in the scaled image.
- **`$filter`** — Image filter to use.
- **`$blur`** — The blur factor where larger than 1 is blurry, lesser than 1 is sharp.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
