---
id: "en-php-function-imagick-clutimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::clutImage"
title: "Replaces colors in the image"
signature: "public bool Imagick::clutImage(Imagick $lookup_table, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.clutimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Replaces colors in the image

## Description

```php
public bool Imagick::clutImage(Imagick $lookup_table, int $channel = Imagick::CHANNEL_DEFAULT)
```

Replaces colors in the image from a color lookup table. Optional second parameter to replace colors in a specific channel. This method is available if Imagick has been compiled against ImageMagick version 6.3.6 or newer.

## Parameters

- **`$lookup_table`** — Imagick object containing the color lookup table
- **`$channel`** — The Channeltype constant. When not supplied, default channels are replaced.

## Return Values

Returns `true` on success.

## Examples

**Using `Imagick::clutImage()`:**

Replace colors in the image from a color lookup table.

```php


<?php
$image = new Imagick('test.jpg');
$clut = new Imagick();
$clut->newImage(1, 1, new ImagickPixel('black'));
$image->clutImage($clut);
$image->writeImage('test_out.jpg');
?>

    
```

## See Also

`Imagick::adaptiveBlurImage()` `Imagick::motionBlurImage()` `Imagick::radialBlurImage()`
