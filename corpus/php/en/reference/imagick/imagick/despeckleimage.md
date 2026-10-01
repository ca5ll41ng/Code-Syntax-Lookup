---
id: "en-php-function-imagick-despeckleimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::despeckleImage"
title: "Reduces the speckle noise in an image"
signature: "public bool Imagick::despeckleImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.despeckleimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reduces the speckle noise in an image

## Description

```php
public bool Imagick::despeckleImage()
```

Reduces the speckle noise in an image while preserving the edges of the original image.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::despeckleImage()`**

```php

      
<?php
function despeckleImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->despeckleImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
