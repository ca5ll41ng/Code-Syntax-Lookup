---
id: "en-php-function-imagick-equalizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::equalizeImage"
title: "Equalizes the image histogram"
signature: "public bool Imagick::equalizeImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.equalizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Equalizes the image histogram

## Description

```php
public bool Imagick::equalizeImage()
```

Equalizes the image histogram.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::equalizeImage()`**

```php

      
<?php
function equalizeImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->equalizeImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
