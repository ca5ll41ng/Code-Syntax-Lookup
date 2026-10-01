---
id: "en-php-function-imagick-setimagecolorspace"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageColorspace"
title: "Sets the image colorspace"
signature: "public bool Imagick::setImageColorspace(int $colorspace)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagecolorspace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image colorspace

## Description

```php
public bool Imagick::setImageColorspace(int $colorspace)
```

Sets the image colorspace. This method should be used when creating new images. To change the colorspace of an existing image, you should use `Imagick::transformImageColorspace()`.

## Parameters

- **`$colorspace`** — One of the COLORSPACE constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
