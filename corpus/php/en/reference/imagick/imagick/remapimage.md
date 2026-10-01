---
id: "en-php-function-imagick-remapimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::remapImage"
title: "Remaps image colors"
signature: "public bool Imagick::remapImage(Imagick $replacement, int $DITHER)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.remapimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remaps image colors

## Description

```php
public bool Imagick::remapImage(Imagick $replacement, int $DITHER)
```

Replaces colors an image with those defined by `$replacement`. The colors are replaced with the closest possible color. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

## Parameters

- **`$replacement`** — An Imagick object containing the replacement colors
- **`$DITHER`** — Refer to this list of dither method constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
