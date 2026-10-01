---
id: "en-php-function-imagick-setimageindex"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageIndex"
title: "Set the iterator position"
signature: "public bool Imagick::setImageIndex(int $index)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimageindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set the iterator position

## Description

```php
public bool Imagick::setImageIndex(int $index)
```

Set the iterator to the position in the image list specified with the index parameter.

This method has been deprecated. See `Imagick::setIteratorIndex()`.

## Parameters

- **`$index`** — The position to set the iterator to

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
