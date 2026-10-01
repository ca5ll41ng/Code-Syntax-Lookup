---
id: "en-php-function-gmagick-trimimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::trimimage"
title: "Remove edges from the image"
signature: "public Gmagick Gmagick::trimimage(float $fuzz)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.trimimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove edges from the image

## Description

```php
public Gmagick Gmagick::trimimage(float $fuzz)
```

Remove edges that are the background color from the image.

## Parameters

- **`$fuzz`** — By default target must match a particular pixel color exactly. However, in many cases two colors may differ by a small amount. The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same. This parameter represents the variation on the quantum range.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
