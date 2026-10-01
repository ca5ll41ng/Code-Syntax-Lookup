---
id: "en-php-function-imagick-getimagechanneldistortions"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelDistortions"
title: "Gets channel distortions"
signature: "public float Imagick::getImageChannelDistortions(Imagick $reference, int $metric, int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechanneldistortions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets channel distortions

## Description

```php
public float Imagick::getImageChannelDistortions(Imagick $reference, int $metric, int $channel = Imagick::CHANNEL_DEFAULT)
```

Compares one or more image channels of an image to a reconstructed image and returns the specified distortion metrics This method is available if Imagick has been compiled against ImageMagick version 6.4.4 or newer.

## Parameters

- **`$reference`** — Imagick object containing the reference image
- **`$metric`** — Refer to this list of metric type constants.
- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns a `float` describing the channel distortion.

## Errors/Exceptions

Throws ImagickException on error.
