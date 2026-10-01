---
id: "en-php-function-imagick-setcolorspace"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setColorspace"
title: "Set colorspace"
signature: "public bool Imagick::setColorspace(int $COLORSPACE)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setcolorspace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set colorspace

## Description

```php
public bool Imagick::setColorspace(int $COLORSPACE)
```

Sets the global colorspace value for the object. This method is available if Imagick has been compiled against ImageMagick version 6.5.7 or newer.

## Parameters

- **`$COLORSPACE`** — One of the COLORSPACE constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
