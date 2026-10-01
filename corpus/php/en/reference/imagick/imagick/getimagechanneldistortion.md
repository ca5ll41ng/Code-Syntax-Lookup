---
id: "en-php-function-imagick-getimagechanneldistortion"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelDistortion"
title: "Compares image channels of an image to a reconstructed image"
signature: "public float Imagick::getImageChannelDistortion(Imagick $reference, int $channel, int $metric)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechanneldistortion.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compares image channels of an image to a reconstructed image

## Description

```php
public float Imagick::getImageChannelDistortion(Imagick $reference, int $channel, int $metric)
```

Compares one or more image channels of an image to a reconstructed image and returns the specified distortion metric.

## Parameters

- **`$reference`** — Imagick object to compare to.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.
- **`$metric`** — One of the metric type constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
