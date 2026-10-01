---
id: "en-php-function-imagick-motionblurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::motionBlurImage"
title: "Simulates motion blur"
signature: "public bool Imagick::motionBlurImage(float $radius, float $sigma, float $angle, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.motionblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates motion blur

## Description

```php
public bool Imagick::motionBlurImage(float $radius, float $sigma, float $angle, int $channel = Imagick::CHANNEL_DEFAULT)
```

Simulates motion blur. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and MotionBlurImage() selects a suitable radius for you. Angle gives the angle of the blurring motion.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel.
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.
- **`$angle`** — Apply the effect along this angle.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants. The channel argument affects only if Imagick is compiled against ImageMagick version 6.4.4 or greater.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::motionBlurImage()`**

```php

      
<?php
function motionBlurImage($imagePath, $radius, $sigma, $angle, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->motionBlurImage($radius, $sigma, $angle, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
