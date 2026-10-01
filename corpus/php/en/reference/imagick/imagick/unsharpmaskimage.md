---
id: "en-php-function-imagick-unsharpmaskimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::unsharpMaskImage"
title: "Sharpens an image"
signature: "public bool Imagick::unsharpMaskImage(float $radius, float $sigma, float $amount, float $threshold, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.unsharpmaskimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sharpens an image

## Description

```php
public bool Imagick::unsharpMaskImage(float $radius, float $sigma, float $amount, float $threshold, int $channel = Imagick::CHANNEL_DEFAULT)
```

Sharpens an image. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and Imagick::UnsharpMaskImage() selects a suitable radius for you.

## Parameters

- **`$radius`**
- **`$sigma`**
- **`$amount`**
- **`$threshold`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::unsharpMaskImage()`**

```php

      
<?php
function unsharpMaskImage($imagePath, $radius, $sigma, $amount, $unsharpThreshold) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->unsharpMaskImage($radius, $sigma, $amount, $unsharpThreshold);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
