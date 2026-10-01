---
id: "en-php-function-imagick-paintfloodfillimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::paintFloodfillImage"
title: "Changes the color value of any pixel that matches target"
signature: "public bool Imagick::paintFloodfillImage(mixed $fill, float $fuzz, mixed $bordercolor, int $x, int $y, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.paintfloodfillimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the color value of any pixel that matches target

## Description

```php
public bool Imagick::paintFloodfillImage(mixed $fill, float $fuzz, mixed $bordercolor, int $x, int $y, int $channel = Imagick::CHANNEL_DEFAULT)
```

Changes the color value of any pixel that matches target and is an immediate neighbor. As of ImageMagick 6.3.8 this method has been deprecated and `Imagick::floodfillPaintImage()` should be used instead.

## Parameters

- **`$fill`** — ImagickPixel object or a string containing the fill color
- **`$fuzz`** — The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color for the purposes of the floodfill.
- **`$bordercolor`** — ImagickPixel object or a string containing the border color
- **`$x`** — X start position of the floodfill
- **`$y`** — Y start position of the floodfill
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.
