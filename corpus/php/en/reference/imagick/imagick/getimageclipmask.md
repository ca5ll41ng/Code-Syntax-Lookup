---
id: "en-php-function-imagick-getimageclipmask"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageClipMask"
title: "Gets image clip mask"
signature: "public Imagick Imagick::getImageClipMask()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageclipmask.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets image clip mask

## Description

```php
public Imagick Imagick::getImageClipMask()
```

Returns the image clip mask. The clip mask is an Imagick object containing the clip mask. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

This function has no parameters.

## Return Values

Returns an Imagick object containing the clip mask.

## Errors/Exceptions

Throws ImagickException on error.
