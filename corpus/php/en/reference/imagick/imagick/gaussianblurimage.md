---
id: "en-php-function-imagick-gaussianblurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::gaussianBlurImage"
title: "Blurs an image"
signature: "public bool Imagick::gaussianBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.gaussianblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Blurs an image

## Description

```php
public bool Imagick::gaussianBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)
```

Blurs an image. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, the radius should be larger than sigma. Use a radius of 0 and selects a suitable radius for you.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel.
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::gaussianBlurImage()`**

```php

      
<?php
function gaussianBlurImage($imagePath, $radius, $sigma, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->gaussianBlurImage($radius, $sigma, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
