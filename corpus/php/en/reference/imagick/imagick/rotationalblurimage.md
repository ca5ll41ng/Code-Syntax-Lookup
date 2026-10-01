---
id: "en-php-function-imagick-rotationalblurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::rotationalBlurImage"
title: "Rotational blurs an image"
signature: "public bool Imagick::rotationalBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.rotationalblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rotational blurs an image

## Description

```php
public bool Imagick::rotationalBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT)
```

Rotational blurs an image.

## Parameters

- **`$angle`** — The angle to apply the blur over.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Examples

**`Imagick::rotationalBlurImage()`**

```php

      
<?php
function rotationalBlurImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->rotationalBlurImage(3);
    $imagick->rotationalBlurImage(5);
    $imagick->rotationalBlurImage(7);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
