---
id: "en-php-function-imagick-haldclutimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::haldClutImage"
title: "Replaces colors in the image"
signature: "public bool Imagick::haldClutImage(Imagick $clut, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.haldclutimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces colors in the image

## Description

```php
public bool Imagick::haldClutImage(Imagick $clut, int $channel = Imagick::CHANNEL_DEFAULT)
```

Replaces colors in the image using a Hald lookup table. Hald images can be created using HALD color coder.

## Parameters

- **`$clut`** — Imagick object containing the Hald lookup image.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**`Imagick::haldClutImage()`**

```php

      
<?php
function haldClutImage($imagePath) {
    $imagick = new \Imagick(realpath($imagePath));
    $imagickPalette = new \Imagick(realpath("images/hald/hald_8.png"));
    $imagickPalette->sepiatoneImage(55);
    $imagick->haldClutImage($imagickPalette);
    header("Content-Type: image/jpg");
    echo $imagick->getImageBlob();
}

?>

      
```
