---
id: "en-php-function-imagick-setimagecompose"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageCompose"
title: "Sets the image composite operator"
signature: "public bool Imagick::setImageCompose(int $compose)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagecompose.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image composite operator

## Description

```php
public bool Imagick::setImageCompose(int $compose)
```

Sets the image composite operator, useful for specifying how to composite the image thumbnail when using the Imagick::montageImage() method.

## Parameters

- **`$compose`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
