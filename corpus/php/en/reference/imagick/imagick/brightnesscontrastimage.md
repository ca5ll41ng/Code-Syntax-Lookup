---
id: "en-php-function-imagick-brightnesscontrastimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::brightnessContrastImage"
title: "Change the brightness and/or contrast of an image"
signature: "public bool Imagick::brightnessContrastImage(float $brightness, float $contrast, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.brightnesscontrastimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change the brightness and/or contrast of an image

## Description

```php
public bool Imagick::brightnessContrastImage(float $brightness, float $contrast, int $channel = Imagick::CHANNEL_DEFAULT)
```

Change the brightness and/or contrast of an image. It converts the brightness and contrast parameters into slope and intercept and calls a polynomial function to apply to the image.

## Parameters

- **`$brightness`**
- **`$contrast`**
- **`$channel`**

## Return Values

Returns `true` on success.

## Examples

**`Imagick::brightnessContrastImage()`**

```php

      
<?php
function brightnessContrastImage($imagePath, $brightness, $contrast, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->brightnessContrastImage($brightness, $contrast, $channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
