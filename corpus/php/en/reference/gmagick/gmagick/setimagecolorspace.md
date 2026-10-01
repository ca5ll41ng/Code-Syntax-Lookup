---
id: "en-php-function-gmagick-setimagecolorspace"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::setimagecolorspace"
title: "Sets the image colorspace"
signature: "public Gmagick Gmagick::setimagecolorspace(int $colorspace)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.setimagecolorspace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image colorspace

## Description

```php
public Gmagick Gmagick::setimagecolorspace(int $colorspace)
```

Sets the image colorspace.

## Parameters

- **`$colorspace`** — One of the Colorspace constant (`Gmagick::COLORSPACE_*`).

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
