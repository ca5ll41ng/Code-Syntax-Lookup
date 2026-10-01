---
id: "en-php-function-imagick-getimageblueprimary"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageBluePrimary"
title: "Returns the chromaticy blue primary point"
signature: "public array Imagick::getImageBluePrimary()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageblueprimary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the chromaticy blue primary point

## Description

```php
public array Imagick::getImageBluePrimary()
```

Returns the chromaticity blue primary point for the image.

## Parameters

- **`$x`** — The chromaticity blue primary x-point.
- **`$y`** — The chromaticity blue primary y-point.

## Return Values

Array consisting of "x" and "y" coordinates of point.

## Errors/Exceptions

Throws ImagickException on error.
