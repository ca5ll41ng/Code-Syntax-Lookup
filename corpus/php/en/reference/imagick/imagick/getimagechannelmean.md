---
id: "en-php-function-imagick-getimagechannelmean"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelMean"
title: "Gets the mean and standard deviation"
signature: "public array Imagick::getImageChannelMean(int $channel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechannelmean.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the mean and standard deviation

## Description

```php
public array Imagick::getImageChannelMean(int $channel)
```

Gets the mean and standard deviation of one or more image channels.

## Parameters

- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channeltype constants using bitwise operators. Refer to this list of channel constants.

## Return Values

Returns an array with `"mean"` and `"standardDeviation"` members.

## Errors/Exceptions

Throws ImagickException on error.
