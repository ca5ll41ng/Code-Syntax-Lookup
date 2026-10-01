---
id: "en-php-function-imagick-radialblurimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::radialBlurImage"
title: "Radial blurs an image"
signature: "public bool Imagick::radialBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.radialblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Radial blurs an image

## Description

```php
public bool Imagick::radialBlurImage(float $angle, int $channel = Imagick::CHANNEL_DEFAULT)
```

Radial blurs an image.

## Parameters

- **`$angle`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::radialBlurImage()`**

```php

      
<?php
function radialBlurImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    //Blur 3 times with different radii
    $imagick->radialBlurImage(3);
    $imagick->radialBlurImage(5);
    $imagick->radialBlurImage(7);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
