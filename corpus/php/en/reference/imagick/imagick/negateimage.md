---
id: "en-php-function-imagick-negateimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::negateImage"
title: "Negates the colors in the reference image"
signature: "public bool Imagick::negateImage(bool $gray, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.negateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Negates the colors in the reference image

## Description

```php
public bool Imagick::negateImage(bool $gray, int $channel = Imagick::CHANNEL_DEFAULT)
```

Negates the colors in the reference image. The Grayscale option means that only grayscale values within the image are negated.

## Parameters

- **`$gray`** — Whether to only negate grayscale pixels within the image.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::negateImage()`**

```php

      
<?php
function negateImage($imagePath, $grayOnly, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->negateImage($grayOnly, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
