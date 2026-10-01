---
id: "en-php-function-imagick-blurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::blurImage"
title: "Adds blur filter to image"
signature: "public bool Imagick::blurImage(float $radius, float $sigma, [int $channel = ...])"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.blurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds blur filter to image

## Description

```php
public bool Imagick::blurImage(float $radius, float $sigma, [int $channel = ...])
```

Adds blur filter to image. Optional third parameter to blur a specific channel.

## Parameters

- **`$radius`** — Blur radius
- **`$sigma`** — Standard deviation
- **`$channel`** — The Channeltype constant. When not supplied, all channels are blurred.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Using `Imagick::blurImage()`:**

Blur an image, then display to the browser.

```php


<?php

header('Content-type: image/jpeg');

$image = new Imagick('test.jpg');

$image->blurImage(5,3);
echo $image;

?>

    
```

## See Also

`Imagick::adaptiveBlurImage()` `Imagick::motionBlurImage()` `Imagick::radialBlurImage()`
