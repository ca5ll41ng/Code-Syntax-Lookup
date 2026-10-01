---
id: "en-php-function-imagick-getimageblob"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageBlob"
title: "Returns the image sequence as a blob"
signature: "public string Imagick::getImageBlob()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimageblob.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the image sequence as a blob

## Description

```php
public string Imagick::getImageBlob()
```

Implements direct to memory image formats. It returns the image sequence as a string. The format of the image determines the format of the returned blob (GIF, JPEG, PNG, etc.). To return a different image format, use Imagick::setImageFormat().

## Parameters

This function has no parameters.

## Return Values

Returns a string containing the image.

## Errors/Exceptions

Throws ImagickException on error.
