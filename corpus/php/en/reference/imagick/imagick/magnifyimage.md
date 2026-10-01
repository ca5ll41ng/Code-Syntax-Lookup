---
id: "en-php-function-imagick-magnifyimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::magnifyImage"
title: "Scales an image proportionally 2x"
signature: "public bool Imagick::magnifyImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.magnifyimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scales an image proportionally 2x

## Description

```php
public bool Imagick::magnifyImage()
```

Is a convenience method that scales an image proportionally to twice its original size.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::magnifyImage()`**

```php

      
<?php
function magnifyImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->magnifyImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
