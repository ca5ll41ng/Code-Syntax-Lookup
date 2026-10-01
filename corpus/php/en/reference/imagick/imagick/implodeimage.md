---
id: "en-php-function-imagick-implodeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::implodeImage"
title: "Creates a new image as a copy"
signature: "public bool Imagick::implodeImage(float $radius)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.implodeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new image as a copy

## Description

```php
public bool Imagick::implodeImage(float $radius)
```

Creates a new image that is a copy of an existing one with the image pixels "imploded" by the specified percentage.

## Parameters

- **`$radius`** — The radius of the implode

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::implodeImage()`**

```php

      
<?php
function implodeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->implodeImage(0.0001);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();

}

?>

      
```
