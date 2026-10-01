---
id: "en-php-function-imagick-filter"
language: "php"
lang: "en"
category: "function"
name: "Imagick::filter"
title: "Applies a custom convolution kernel to the image"
signature: "public bool Imagick::filter(ImagickKernel $ImagickKernel, int $channel = Imagick::CHANNEL_UNDEFINED)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.filter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a custom convolution kernel to the image

## Description

```php
public bool Imagick::filter(ImagickKernel $ImagickKernel, int $channel = Imagick::CHANNEL_UNDEFINED)
```

Applies a custom convolution kernel to the image.

## Parameters

- **`$ImagickKernel`** — An instance of ImagickKernel that represents either a single kernel or a linked series of kernels.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Examples

**`Imagick::filter()`**

```php

      
<?php
function filter($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $matrix = [
        [-1, 0, -1],
        [0,  5,  0],
        [-1, 0, -1],
    ];
    
    $kernel = \ImagickKernel::fromMatrix($matrix);
    $strength = 0.5;    
    $kernel->scale($strength, \Imagick::NORMALIZE_KERNEL_VALUE);    
    $kernel->addUnityKernel(1 - $strength);

    $imagick->filter($kernel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
