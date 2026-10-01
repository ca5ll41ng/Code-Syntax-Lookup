---
id: "en-php-function-imagick-sigmoidalcontrastimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::sigmoidalContrastImage"
title: "Adjusts the contrast of an image"
signature: "public bool Imagick::sigmoidalContrastImage(bool $sharpen, float $alpha, float $beta, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.sigmoidalcontrastimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adjusts the contrast of an image

## Description

```php
public bool Imagick::sigmoidalContrastImage(bool $sharpen, float $alpha, float $beta, int $channel = Imagick::CHANNEL_DEFAULT)
```

Adjusts the contrast of an image with a non-linear sigmoidal contrast algorithm. Increase the contrast of the image using a sigmoidal transfer function without saturating highlights or shadows. `$alpha` indicates how much to increase the contrast: `0.00` is none; `3.00` is typical; `20.00` is pushing it. `$beta` indicates where midtones fall in the resultant image, as a fraction of the quantum range: `0.0` is white, `0.5` is middle-gray, `1.0` is black (multiply by getQuantumRange()['quantumRangeLong'] to get the value to pass).

See also [ImageMagick Examples -- Color Modifications — Sigmoidal Non-linearity Contrast]().

## Parameters

- **`$sharpen`** — If `true` increase the contrast, if `false` decrease the contrast.
- **`$alpha`** — The amount of contrast to apply. `1.00` is very little, `5.00` is a significant amount, `20.00` is extreme.
- **`$beta`** — Where the midpoint of the gradient will be. This value should be in the range `0.00` to `1.00` - multiplied by the quantum value for ImageMagick.
- **`$channel`** — Which color channels the contrast will be applied to.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Create a gradient image using `Imagick::sigmoidalContrastImage()` suitable for blending two images together smoothly, with the blending defined by `$alpha` and `$beta`**

```php


<?php

function generateBlendImage($width, $height, $alpha = 10, $beta = 0.5)
{
    $imagick = new Imagick();
    $imagick->newPseudoImage($width, $height, 'gradient:black-white');
    $quanta = $imagick->getQuantumRange();
    $imagick->sigmoidalContrastImage(true, $alpha, $beta * $quanta["quantumRangeLong"]);

    return $imagick;
}

   
```
