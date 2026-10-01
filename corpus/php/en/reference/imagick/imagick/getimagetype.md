---
id: "en-php-function-imagick-getimagetype"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageType"
title: "Gets the image type"
signature: "public int Imagick::getImageType()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagetype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the image type

## Description

```php
public int Imagick::getImageType()
```

Returns the type of the image, derived from its colorspace, its storage class and whether it carries an alpha channel. The pixels themselves are not examined, so the value reflects how the image is currently held rather than the smallest type it could be reduced to.

## Parameters

This function has no parameters.

## Return Values

Returns one of the following `imagick::IMGTYPE_{*}` constants. `imagick::IMGTYPE_UNDEFINED` and `imagick::IMGTYPE_OPTIMIZE` are never returned.

- `imagick::IMGTYPE_BILEVEL`
- `imagick::IMGTYPE_GRAYSCALE`
- `imagick::IMGTYPE_GRAYSCALEMATTE`
- `imagick::IMGTYPE_PALETTE`
- `imagick::IMGTYPE_PALETTEMATTE`
- `imagick::IMGTYPE_TRUECOLOR`
- `imagick::IMGTYPE_TRUECOLORMATTE`
- `imagick::IMGTYPE_COLORSEPARATION`
- `imagick::IMGTYPE_COLORSEPARATIONMATTE`

## Errors/Exceptions

Throws ImagickException on error.
