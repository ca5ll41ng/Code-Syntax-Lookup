---
id: "en-php-function-imagick-orderedposterizeimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::orderedPosterizeImage"
title: "Performs an ordered dither"
signature: "public bool Imagick::orderedPosterizeImage(string $threshold_map, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.orderedposterizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Performs an ordered dither

## Description

```php
public bool Imagick::orderedPosterizeImage(string $threshold_map, int $channel = Imagick::CHANNEL_DEFAULT)
```

Performs an ordered dither based on a number of pre-defined dithering threshold maps, but over multiple intensity levels, which can be different for different channels, according to the input arguments. This method is available if Imagick has been compiled against ImageMagick version 6.3.1 or newer.

## Parameters

- **`$threshold_map`** — A string containing the name of the threshold dither map to use
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::orderedPosterizeImage()`**

```php

      
<?php
function orderedPosterizeImage($imagePath, $orderedPosterizeType) {
    $imagick = new \Imagick(realpath($imagePath));
    
  
    $imagick->orderedPosterizeImage($orderedPosterizeType);
    $imagick->setImageFormat('png');
    
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

//orderedPosterizeImage($imagePath, 'o4x4,3,3');
//orderedPosterizeImage($imagePath, 'o8x8,6,6');
orderedPosterizeImage($imagePath, 'h8x8a');





?>

      
```
