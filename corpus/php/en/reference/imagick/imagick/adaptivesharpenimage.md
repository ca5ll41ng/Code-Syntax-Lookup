---
id: "en-php-function-imagick-adaptivesharpenimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::adaptiveSharpenImage"
title: "Adaptively sharpen the image"
signature: "public bool Imagick::adaptiveSharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.adaptivesharpenimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adaptively sharpen the image

## Description

```php
public bool Imagick::adaptiveSharpenImage(float $radius, float $sigma, int $channel = Imagick::CHANNEL_DEFAULT)
```

Adaptively sharpen the image by sharpening more intensely near image edges and less intensely far from edges. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$radius`** — The radius of the Gaussian, in pixels, not counting the center pixel. Use 0 for auto-select.
- **`$sigma`** — The standard deviation of the Gaussian, in pixels.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Examples

**A `Imagick::adaptiveSharpenImage()` example**

Adaptively sharpen the image with radius 2 and sigma 1.

```php


<?php
try {
    $image = new Imagick('image.png');
    $image->adaptiveSharpenImage(2,1);
} catch(ImagickException $e) {
    echo 'Error: ' , $e->getMessage();
    die();
}
header('Content-type: image/png');
echo $image;
?>

    
```

## See Also

`Imagick::sharpenImage()`
