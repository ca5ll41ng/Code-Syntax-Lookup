---
id: "en-php-function-imagick-addnoiseimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::addNoiseImage"
title: "Adds random noise to the image"
signature: "public bool Imagick::addNoiseImage(int $noise_type, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.addnoiseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds random noise to the image

## Description

```php
public bool Imagick::addNoiseImage(int $noise_type, int $channel = Imagick::CHANNEL_DEFAULT)
```

Adds random noise to the image.

## Parameters

- **`$noise_type`** — The type of the noise. Refer to this list of noise constants.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Examples

**`Imagick::addNoiseImage()`**

```php

      
<?php
function addNoiseImage($noiseType, $imagePath, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->addNoiseImage($noiseType, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
