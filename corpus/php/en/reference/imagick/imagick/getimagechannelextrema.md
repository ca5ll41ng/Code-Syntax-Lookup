---
id: "en-php-function-imagick-getimagechannelextrema"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelExtrema"
title: "Gets the extrema for one or more image channels"
signature: "public array Imagick::getImageChannelExtrema(int $channel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechannelextrema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the extrema for one or more image channels

## Description

```php
public array Imagick::getImageChannelExtrema(int $channel)
```

Gets the extrema for one or more image channels. Return value is an associative array with the keys "minima" and "maxima".

## Parameters

- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
