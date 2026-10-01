---
id: "en-php-function-imagick-addimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::addImage"
title: "Adds new image to Imagick object image list"
signature: "public bool Imagick::addImage(Imagick $source)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.addimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds new image to Imagick object image list

## Description

```php
public bool Imagick::addImage(Imagick $source)
```

Adds new image to Imagick object from the current position of the source object. After the operation iterator position is moved at the end of the list.

## Parameters

- **`$source`** — The source Imagick object

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
