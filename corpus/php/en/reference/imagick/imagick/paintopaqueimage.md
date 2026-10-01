---
id: "en-php-function-imagick-paintopaqueimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::paintOpaqueImage"
title: "Change any pixel that matches color"
signature: "public bool Imagick::paintOpaqueImage(mixed $target, mixed $fill, float $fuzz, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.paintopaqueimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change any pixel that matches color

## Description

```php
public bool Imagick::paintOpaqueImage(mixed $target, mixed $fill, float $fuzz, int $channel = Imagick::CHANNEL_DEFAULT)
```

Changes any pixel that matches color with the color defined by fill.

## Parameters

- **`$target`** — Change this target color to the fill color within the image. An ImagickPixel object or a string representing the target color.
- **`$fill`** — An ImagickPixel object or a string representing the fill color.
- **`$fuzz`** — The fuzz member of image defines how much tolerance is acceptable to consider two colors as the same.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.

## Changelog

|  |  |
| --- | --- |
| PECL imagick 2.1.0 | Now allows a string representing the color as first and second parameter. Previous versions allow only an ImagickPixel object. |
