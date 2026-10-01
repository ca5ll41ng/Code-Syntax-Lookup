---
id: "en-php-function-imagick-textureimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::textureImage"
title: "Repeatedly tiles the texture image"
signature: "Imagick Imagick::textureImage(Imagick $texture_wand)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.textureimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Repeatedly tiles the texture image

## Description

```php
Imagick Imagick::textureImage(Imagick $texture_wand)
```

Repeatedly tiles the texture image across and down the image canvas.

## Parameters

- **`$texture_wand`** — Imagick object to use as texture image

## Return Values

Returns a new Imagick object that has the repeated texture applied.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::textureImage()`**

```php

      
<?php
function textureImage($imagePath) {
    $image = new \Imagick();
    $image->newImage(640, 480, new \ImagickPixel('pink'));
    $image->setImageFormat("jpg");
    $texture = new \Imagick(realpath($imagePath));
    $texture->scaleimage($image->getimagewidth() / 4, $image->getimageheight() / 4);
    $image = $image->textureImage($texture);
    header("Content-Type: image/jpg");
    echo $image;
}

?>

      
```
