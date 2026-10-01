---
id: "en-php-function-imagick-contraststretchimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::contrastStretchImage"
title: "Enhances the contrast of a color image"
signature: "public bool Imagick::contrastStretchImage(float $black_point, float $white_point, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.contraststretchimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enhances the contrast of a color image

## Description

```php
public bool Imagick::contrastStretchImage(float $black_point, float $white_point, int $channel = Imagick::CHANNEL_DEFAULT)
```

Enhances the contrast of a color image by adjusting the pixels color to span the entire range of colors available. This method is available if Imagick has been compiled against ImageMagick version 6.2.9 or newer.

## Parameters

- **`$black_point`** — The black point.
- **`$white_point`** — The white point.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. `Imagick::CHANNEL_ALL`. Refer to this list of channel constants.

## Return Values

Returns `true` on success.
