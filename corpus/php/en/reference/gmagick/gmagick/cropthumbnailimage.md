---
id: "en-php-function-gmagick-cropthumbnailimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::cropthumbnailimage"
title: "Creates a crop thumbnail"
signature: "public Gmagick Gmagick::cropthumbnailimage(int $width, int $height)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.cropthumbnailimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a crop thumbnail

## Description

```php
public Gmagick Gmagick::cropthumbnailimage(int $width, int $height)
```

Creates a fixed size thumbnail by first scaling the image down and cropping a specified area from the center.

## Parameters

- **`$width`** — The width of the thumbnail.
- **`$height`** — The Height of the thumbnail.

## Return Values

The cropped `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
