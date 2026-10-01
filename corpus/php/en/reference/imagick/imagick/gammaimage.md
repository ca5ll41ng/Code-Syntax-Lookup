---
id: "en-php-function-imagick-gammaimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::gammaImage"
title: "Gamma-corrects an image"
signature: "public bool Imagick::gammaImage(float $gamma, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.gammaimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gamma-corrects an image

## Description

```php
public bool Imagick::gammaImage(float $gamma, int $channel = Imagick::CHANNEL_DEFAULT)
```

Gamma-corrects an image. The same image viewed on different devices will have perceptual differences in the way the image's intensities are represented on the screen. Specify individual gamma levels for the red, green, and blue channels, or adjust all three with the gamma parameter. Values typically range from 0.8 to 2.3.

## Parameters

- **`$gamma`** — The amount of gamma-correction.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::gammaImage()`**

```php

      
<?php
function gammaImage($imagePath, $gamma, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->gammaImage($gamma, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
