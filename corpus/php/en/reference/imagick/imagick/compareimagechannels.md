---
id: "en-php-function-imagick-compareimagechannels"
language: "php"
lang: "en"
category: "function"
name: "Imagick::compareImageChannels"
title: "Returns the difference in one or more images"
signature: "public array Imagick::compareImageChannels(Imagick $image, int $channelType, int $metricType)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.compareimagechannels.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the difference in one or more images

## Description

```php
public array Imagick::compareImageChannels(Imagick $image, int $channelType, int $metricType)
```

Compares one or more images and returns the difference image.

## Parameters

- **`$image`** — Imagick object containing the image to compare.
- **`$channelType`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.
- **`$metricType`** — One of the metric type constants.

## Return Values

Array consisting of `new_wand` and `distortion`.

## Errors/Exceptions

Throws ImagickException on error.
