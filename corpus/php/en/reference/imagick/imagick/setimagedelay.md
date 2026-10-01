---
id: "en-php-function-imagick-setimagedelay"
language: "php"
lang: "en"
category: "function"
name: "Imagick::setImageDelay"
title: "Sets the image delay"
signature: "public bool Imagick::setImageDelay(int $delay)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.setimagedelay.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the image delay

## Description

```php
public bool Imagick::setImageDelay(int $delay)
```

Sets the image delay. For an animated image this is the amount of time that this frame of the image should be displayed for, before displaying the next frame.

The delay can be set individually for each frame in an image.

## Parameters

- **`$delay`** — The amount of time expressed in 'ticks' that the image should be displayed for. For animated GIFs there are 100 ticks per second, so a value of 20 would be 20/100 of a second aka 1/5th of a second.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Examples

**Modify animated Gif with `Imagick::setImageDelay()`**

```php


<?php

// Modify an animated Gif so that it's frames are played at a variable speed,
// varying between being shown for 50ms down to 0ms, which will cause the frame
// to be skipped in most browsers.
$imagick = new Imagick(realpath("Test.gif"));
$imagick = $imagick->coalesceImages();

$frameCount = 0;

foreach ($imagick as $frame) {
    $imagick->setImageDelay((($frameCount % 11) * 5));
    $frameCount++;
}

$imagick = $imagick->deconstructImages();

$imagick->writeImages("/path/to/save/output.gif", true);

?>

    
```
