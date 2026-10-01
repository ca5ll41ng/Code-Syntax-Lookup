---
id: "en-php-function-imagick-sketchimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::sketchImage"
title: "Simulates a pencil sketch"
signature: "public bool Imagick::sketchImage(float $radius, float $sigma, float $angle)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.sketchimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Simulates a pencil sketch

## Description

```php
public bool Imagick::sketchImage(float $radius, float $sigma, float $angle)
```

Simulates a pencil sketch. We convolve the image with a Gaussian operator of the given radius and standard deviation (sigma). For reasonable results, radius should be larger than sigma. Use a radius of 0 and Imagick::sketchImage() selects a suitable radius for you. Angle gives the angle of the blurring motion. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.
- **`$angle`** — Apply the effect along this angle.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::sketchImage()`**

```php

      
<?php
function sketchImage($imagePath, $radius, $sigma, $angle) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->sketchimage($radius, $sigma, $angle);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
