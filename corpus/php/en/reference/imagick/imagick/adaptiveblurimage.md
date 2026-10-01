---
id: "en-php-function-imagick-adaptiveblurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::adaptiveBlurImage"
title: "Adds adaptive blur filter to image"
signature: "public bool Imagick::adaptiveBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.adaptiveblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds adaptive blur filter to image

## Description

```php
public bool Imagick::adaptiveBlurImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)
```

Adds an adaptive blur filter to image. The intensity of an adaptive blur depends is dramatically decreased at edge of the image, whereas a standard blur is uniform across the image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel. Provide a value of 0 and the radius will be chosen automagically.
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::adaptiveBlurImage()`:**

Adaptively blur an image, then display to the browser.

```php


<?php

header('Content-type: image/jpeg');

$image = new Imagick('test.jpg');

$image->adaptiveBlurImage(5,3);
echo $image;

?>

    
```

The above example will output something similar to:

## See Also

`Imagick::blurImage()` `Imagick::motionBlurImage()` `Imagick::radialBlurImage()`
