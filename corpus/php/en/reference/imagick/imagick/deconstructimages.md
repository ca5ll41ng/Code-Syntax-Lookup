---
id: "en-php-function-imagick-deconstructimages"
language: "php"
lang: "en"
category: "function"
name: "Imagick::deconstructImages"
title: "Returns certain pixel differences between images"
signature: "public Imagick Imagick::deconstructImages()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.deconstructimages.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns certain pixel differences between images

## Description

```php
public Imagick Imagick::deconstructImages()
```

Compares each image with the next in a sequence and returns the maximum bounding region of any pixel differences it discovers.

## Parameters

This function has no parameters.

## Return Values

Returns a new Imagick object on success.

## Errors/Exceptions

Throws ImagickException on error.
