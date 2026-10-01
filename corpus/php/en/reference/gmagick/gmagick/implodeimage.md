---
id: "en-php-function-gmagick-implodeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::implodeimage"
title: "Creates a new image as a copy"
signature: "public mixed Gmagick::implodeimage(float $radius)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.implodeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new image as a copy

## Description

```php
public mixed Gmagick::implodeimage(float $radius)
```

Creates a new image that is a copy of an existing one with the image pixels "imploded" by the specified percentage.

## Parameters

- **`$radius`** — The radius of the implode.

## Return Values

Returns imploded `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
