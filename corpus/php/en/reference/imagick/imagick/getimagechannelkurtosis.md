---
id: "en-php-function-imagick-getimagechannelkurtosis"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelKurtosis"
title: "The getImageChannelKurtosis purpose"
signature: "public array Imagick::getImageChannelKurtosis(int $channel = Imagick::CHANNEL_DEFAULT)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechannelkurtosis.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The getImageChannelKurtosis purpose

## Description

```php
public array Imagick::getImageChannelKurtosis(int $channel = Imagick::CHANNEL_DEFAULT)
```

Get the kurtosis and skewness of a specific channel. This method is available if Imagick has been compiled against ImageMagick version 6.4.9 or newer.

## Parameters

- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns an array with `kurtosis` and `skewness` members.

## Errors/Exceptions

Throws ImagickException on error.
