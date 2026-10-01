---
id: "en-php-function-imagick-opaquepaintimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::opaquePaintImage"
title: "Changes the color value of any pixel that matches target"
signature: "public bool Imagick::opaquePaintImage(mixed $target, mixed $fill, float $fuzz, bool $invert, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.opaquepaintimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the color value of any pixel that matches target

## Description

```php
public bool Imagick::opaquePaintImage(mixed $target, mixed $fill, float $fuzz, bool $invert, int $channel = Imagick::CHANNEL_DEFAULT)
```

Changes any pixel that matches color with the color defined by fill. This method is available if Imagick has been compiled against ImageMagick version 6.3.8 or newer.

## Parameters

- **`$target`** — ImagickPixel object or a string containing the color to change
- **`$fill`** — The replacement color
- **`$fuzz`** — The amount of fuzz. For example, set fuzz to 10 and the color red at intensities of 100 and 102 respectively are now interpreted as the same color.
- **`$invert`** — If `true` paints any pixel that does not match the target color.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.
