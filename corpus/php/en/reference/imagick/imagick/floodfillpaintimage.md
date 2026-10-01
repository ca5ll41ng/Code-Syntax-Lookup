---
id: "en-php-function-imagick-floodfillpaintimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::floodFillPaintImage"
title: "Changes the color value of any pixel that matches target"
signature: "public bool Imagick::floodFillPaintImage(mixed $fill, float $fuzz, mixed $target, int $x, int $y, bool $invert, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.floodfillpaintimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the color value of any pixel that matches target

## Description

```php
public bool Imagick::floodFillPaintImage(mixed $fill, float $fuzz, mixed $target, int $x, int $y, bool $invert, int $channel = Imagick::CHANNEL_DEFAULT)
```

Changes the color value of any pixel that matches target and is an immediate neighbor. This method is a replacement for deprecated `Imagick::paintFloodFillImage()`. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

## Parameters

- **`$fill`** — ImagickPixel object or a string containing the fill color
- **`$fuzz`** — The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color.
- **`$target`** — ImagickPixel object or a string containing the target color to paint
- **`$x`** — X start position of the floodfill
- **`$y`** — Y start position of the floodfill
- **`$invert`** — If `true` paints any pixel that does not match the target color.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.

## Examples

**`Imagick::floodfillPaintImage()` example**

```php


<?php

/* Create new imagick object */
$im = new Imagick();

/* create red, green and blue images */
$im->newImage(100, 50, "red");
$im->newImage(100, 50, "green");
$im->newImage(100, 50, "blue");

/* Append the images into one */
$im->resetIterator();
$combined = $im->appendImages(true);

/* Save the intermediate image for comparison */
$combined->writeImage("floodfillpaint_intermediate.png");

/* The target pixel to paint */
$x = 1;
$y = 1;

/* Get the color we are painting */
$target = $combined->getImagePixelColor($x, $y);

/* Paints pixel in position 1,1 black and all neighboring 
   pixels that match the target color */
$combined->floodfillPaintImage("black", 1, $target, $x, $y, false);

/* Save the result */
$combined->writeImage("floodfillpaint_result.png");
?>

    
```

The above example will output something similar to:
