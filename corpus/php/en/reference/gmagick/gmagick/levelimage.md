---
id: "en-php-function-gmagick-levelimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::levelimage"
title: "Adjusts the levels of an image"
signature: "public mixed Gmagick::levelimage(float $blackPoint, float $gamma, float $whitePoint, int $channel = Gmagick::CHANNEL_DEFAULT)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.levelimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adjusts the levels of an image

## Description

```php
public mixed Gmagick::levelimage(float $blackPoint, float $gamma, float $whitePoint, int $channel = Gmagick::CHANNEL_DEFAULT)
```

Adjusts the levels of an image by scaling the colors falling between specified white and black points to the full available quantum range. The parameters provided represent the black, mid, and white points. The black point specifies the darkest color in the image. Colors darker than the black point are set to zero. Mid point specifies a gamma correction to apply to the image. White point specifies the lightest color in the image. Colors brighter than the white point are set to the maximum quantum value.

## Parameters

- **`$blackPoint`** — The image black point.
- **`$gamma`** — The gamma value.
- **`$whitePoint`** — The image white point.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

`Gmagick` object with image leveled.

## Errors/Exceptions

Throws an `GmagickException` on error.
