---
id: "en-php-function-gmagick-getimageblueprimary"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::getimageblueprimary"
title: "Returns the chromaticy blue primary point"
signature: "public array Gmagick::getimageblueprimary()"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.getimageblueprimary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the chromaticy blue primary point

## Description

```php
public array Gmagick::getimageblueprimary()
```

Returns the chromaticity blue primary point for the image.

## Parameters

- **`$x`** — The chromaticity blue primary x-point.
- **`$y`** — The chromaticity blue primary y-point.

## Return Values

Array consisting of "x" and "y" coordinates of point.

## Errors/Exceptions

Throws an `GmagickException` on error.
