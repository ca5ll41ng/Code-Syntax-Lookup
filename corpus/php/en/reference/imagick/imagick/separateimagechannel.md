---
id: "en-php-function-imagick-separateimagechannel"
language: "php"
lang: "en"
category: "function"
name: "Imagick::separateImageChannel"
title: "Separates a channel from the image"
signature: "public bool Imagick::separateImageChannel(int $channel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.separateimagechannel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Separates a channel from the image

## Description

```php
public bool Imagick::separateImageChannel(int $channel)
```

Separates a channel from the image and returns a grayscale image. A channel is a particular color component of each pixel in the image.

## Parameters

- **`$channel`** — Which 'channel' to return. For colorspaces other than RGB, you can still use the CHANNEL_RED, CHANNEL_GREEN, CHANNEL_BLUE constants to indicate the 1st, 2nd and 3rd channels.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::separateImageChannel()`**

```php

      
<?php
function separateImageChannel($imagePath, $channel) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagick->separateimagechannel($channel);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

separateImageChannel($imagePath, \Imagick::CHANNEL_GREEN);

?>

      
```
