---
id: "en-php-function-gmagick-setsize"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setsize"
title: "Sets the size of the Gmagick object"
signature: "public Gmagick Gmagick::setsize(int $columns, int $rows)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setsize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the size of the Gmagick object

## Description

```php
public Gmagick Gmagick::setsize(int $columns, int $rows)
```

Sets the size of the Gmagick object. Set it before you read a raw image format such as `Gmagick::COLORSPACE_RGB`, `Gmagick::COLORSPACE_GRAY`, or `Gmagick::COLORSPACE_CMYK`.

## Parameters

- **`$columns`** — The width in pixels.
- **`$rows`** — The height in pixels.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
