---
id: "en-php-function-imagick-getimagesblob"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImagesBlob"
title: "Returns all image sequences as a blob"
signature: "public string Imagick::getImagesBlob()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagesblob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns all image sequences as a blob

## Description

```php
public string Imagick::getImagesBlob()
```

Implements direct to memory image formats. It returns all image sequences as a string. The format of the image determines the format of the returned blob (GIF, JPEG, PNG, etc.). To return a different image format, use Imagick::setImageFormat().

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the images. On failure, throws ImagickException.
