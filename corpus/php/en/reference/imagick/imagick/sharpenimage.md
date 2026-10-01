---
id: "en-php-function-imagick-sharpenimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::sharpenImage"
title: "Sharpens an image"
signature: "public bool Imagick::sharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.sharpenimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sharpens an image

## Description

```php
public bool Imagick::sharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)
```

Sharpens an image. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, the radius should be larger than sigma. Use a radius of 0 and `Imagick::sharpenImage()` selects a suitable radius for you.

## Parameters

- **`$radius`**
- **`$sigma`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::sharpenImage()`**

```php

      
<?php
function sharpenImage($imagePath, $radius, $sigma, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->sharpenimage($radius, $sigma, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
