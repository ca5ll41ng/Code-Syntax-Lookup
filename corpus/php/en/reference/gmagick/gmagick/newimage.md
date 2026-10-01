---
id: "en-php-function-gmagick-newimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::newimage"
title: "Creates a new image"
signature: "public Gmagick Gmagick::newimage(int $width, int $height, string $background, [string $format = ...])"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.newimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new image

## Description

```php
public Gmagick Gmagick::newimage(int $width, int $height, string $background, [string $format = ...])
```

Creates a new image with the specified background color.

## Parameters

- **`$width`** — Width of the new image.
- **`$height`** — Height of the new image.
- **`$background`** — The background color used for this image (as float).
- **`$format`** — Image format.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
