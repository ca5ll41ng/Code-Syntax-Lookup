---
id: "en-php-function-imagick-getimagechannelrange"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelRange"
title: "Gets channel range"
signature: "public array Imagick::getImageChannelRange(int $channel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechannelrange.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets channel range

## Description

```php
public array Imagick::getImageChannelRange(int $channel)
```

Gets the range for one or more image channels. This method is available if Imagick has been compiled against ImageMagick version 6.4.0 or newer.

## Parameters

- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns an array containing minima and maxima values of the channel(s).

## Errors/Exceptions

Throws ImagickException on error.
