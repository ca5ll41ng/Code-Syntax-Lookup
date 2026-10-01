---
id: "en-php-function-imagick-convolveimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::convolveImage"
title: "Applies a custom convolution kernel to the image"
signature: "public bool Imagick::convolveImage(array $kernel, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.convolveimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a custom convolution kernel to the image

## Description

```php
public bool Imagick::convolveImage(array $kernel, int $channel = Imagick::CHANNEL_DEFAULT)
```

Applies a custom convolution kernel to the image.

## Parameters

- **`$kernel`** — The convolution kernel
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::convolveImage()`**

```php

      
<?php
function convolveImage($imagePath, $bias, $kernelMatrix) {
    $imagick = new \Imagick(realpath($imagePath));    
    //$edgeFindingKernel = [-1, -1, -1, -1, 8, -1, -1, -1, -1,];
    $imagick->setImageBias($bias * \Imagick::getQuantum());
    $imagick->convolveImage($kernelMatrix);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
