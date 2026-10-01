---
id: "en-php-function-imagick-randomthresholdimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::randomThresholdImage"
title: "Creates a high-contrast, two-color image"
signature: "public bool Imagick::randomThresholdImage(float $low, float $high, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.randomthresholdimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a high-contrast, two-color image

## Description

```php
public bool Imagick::randomThresholdImage(float $low, float $high, int $channel = Imagick::CHANNEL_DEFAULT)
```

Changes the value of individual pixels based on the intensity of each pixel compared to threshold. The result is a high-contrast, two color image. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$low`** — The low point
- **`$high`** — The high point
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::randomThresholdImage()`**

```php

      
<?php
function randomThresholdimage($imagePath, $lowThreshold, $highThreshold, $channel) {
    $imagick = new \Imagick(realpath($imagePath));

    $imagick->randomThresholdimage(
        $lowThreshold * \Imagick::getQuantum(),
        $highThreshold * \Imagick::getQuantum(),
        $channel
    );
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
