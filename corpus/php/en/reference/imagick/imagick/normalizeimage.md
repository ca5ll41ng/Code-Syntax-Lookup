---
id: "en-php-function-imagick-normalizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::normalizeImage"
title: "Enhances the contrast of a color image"
signature: "public bool Imagick::normalizeImage(int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.normalizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enhances the contrast of a color image

## Description

```php
public bool Imagick::normalizeImage(int $channel = Imagick::CHANNEL_DEFAULT)
```

Enhances the contrast of a color image by adjusting the pixels color to span the entire range of colors available.

## Parameters

- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Examples

**`Imagick::normalizeImage()`**

```php

      
<?php
function normalizeImage($imagePath, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $original = clone $imagick;
    $original->cropimage($original->getImageWidth() / 2, $original->getImageHeight(), 0, 0);
    $imagick->normalizeImage($channel);
    $imagick->compositeimage($original, \Imagick::COMPOSITE_ATOP, 0, 0);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
