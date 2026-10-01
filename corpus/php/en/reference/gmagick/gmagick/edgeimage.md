---
id: "en-php-function-gmagick-edgeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::edgeimage"
title: "Enhance edges within the image"
signature: "public Gmagick Gmagick::edgeimage(float $radius)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.edgeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enhance edges within the image

## Description

```php
public Gmagick Gmagick::edgeimage(float $radius)
```

Enhance edges within the image with a convolution filter of the given radius. Use radius 0 and it will be auto-selected.

## Parameters

- **`$radius`** — The radius of the operation.

## Return Values

The `Gmagick` object with edges enhanced.

## Errors/Exceptions

Throws an `GmagickException` on error.
