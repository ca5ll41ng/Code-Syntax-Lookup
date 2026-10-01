---
id: "en-php-function-imagick-previewimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::previewImages"
title: "Quickly pin-point appropriate parameters for image processing"
signature: "public bool Imagick::previewImages(int $preview)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.previewimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Quickly pin-point appropriate parameters for image processing

## Description

```php
public bool Imagick::previewImages(int $preview)
```

Tiles 9 thumbnails of the specified image with an image processing operation applied at varying strengths. This is helpful to quickly pin-point an appropriate parameter for an image processing operation.

## Parameters

- **`$preview`** — Preview type. See Preview type constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
