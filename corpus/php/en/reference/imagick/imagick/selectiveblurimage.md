---
id: "en-php-function-imagick-selectiveblurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::selectiveBlurImage"
title: "Selectively blur an image within a contrast threshold"
signature: "public bool Imagick::selectiveBlurImage(float $radius, float $sigma, float $threshold, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.selectiveblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Selectively blur an image within a contrast threshold

## Description

```php
public bool Imagick::selectiveBlurImage(float $radius, float $sigma, float $threshold, int $channel = Imagick::CHANNEL_DEFAULT)
```

Selectively blur an image within a contrast threshold. It is similar to the unsharpen mask that sharpens everything with contrast above a certain threshold.

## Parameters

- **`$radius`**
- **`$sigma`**
- **`$threshold`**
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Examples

**`Imagick::selectiveBlurImage()`**

```php

      
<?php
function selectiveBlurImage($imagePath, $radius, $sigma, $threshold, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->selectiveBlurImage($radius, $sigma, $threshold, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
