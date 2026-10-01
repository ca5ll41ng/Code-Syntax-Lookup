---
id: "en-php-function-gmagick-scaleimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::scaleimage"
title: "Scales the size of an image"
signature: "public Gmagick Gmagick::scaleimage(int $width, int $height, bool $fit = false)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.scaleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales the size of an image

## Description

```php
public Gmagick Gmagick::scaleimage(int $width, int $height, bool $fit = false)
```

Scales the size of an image to the given dimensions. The other parameter will be calculated if 0 is passed as either param.

## Parameters

- **`$width`** — The number of columns in the scaled image.
- **`$height`** — The number of rows in the scaled image.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
