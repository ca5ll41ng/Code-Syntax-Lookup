---
id: "en-php-function-imagick-enhanceimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::enhanceImage"
title: "Improves the quality of a noisy image"
signature: "public bool Imagick::enhanceImage()"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.enhanceimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Improves the quality of a noisy image

## Description

```php
public bool Imagick::enhanceImage()
```

Applies a digital filter that improves the quality of a noisy image.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::enhanceImage()`**

```php

      
<?php
function enhanceImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->enhanceImage();
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
