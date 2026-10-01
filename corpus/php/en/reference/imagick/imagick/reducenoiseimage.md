---
id: "en-php-function-imagick-reducenoiseimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::reduceNoiseImage"
title: "Smooths the contours of an image"
signature: "public bool Imagick::reduceNoiseImage(float $radius)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.reducenoiseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Smooths the contours of an image

## Description

```php
public bool Imagick::reduceNoiseImage(float $radius)
```

Smooths the contours of an image while still preserving edge information. The algorithm works by replacing each pixel with its neighbor closest in value. A neighbor is defined by radius. Use a radius of 0 and Imagick::reduceNoiseImage() selects a suitable radius for you.

## Parameters

- **`$radius`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::reduceNoiseImage()`**

```php

      
<?php
function reduceNoiseImage($imagePath, $reduceNoise) {
    $imagick = new \Imagick(realpath($imagePath));
    @$imagick->reduceNoiseImage($reduceNoise);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
