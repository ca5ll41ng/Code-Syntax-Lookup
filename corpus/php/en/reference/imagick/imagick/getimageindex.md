---
id: "en-php-function-imagick-getimageindex"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageIndex"
title: "Gets the index of the current active image"
signature: "public int Imagick::getImageIndex()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the index of the current active image

## Description

```php
public int Imagick::getImageIndex()
```

Returns the index of the current active image within the Imagick object. This method has been deprecated. See `Imagick::getIteratorIndex()`.

## Parameters

This function has no parameters.

## Return Values

Returns an integer containing the index of the image in the stack.

## Errors/Exceptions

Throws ImagickException on error.
