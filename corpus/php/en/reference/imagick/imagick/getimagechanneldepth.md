---
id: "en-php-function-imagick-getimagechanneldepth"
language: "php"
lang: "en"
category: "function"
name: "Imagick::getImageChannelDepth"
title: "Gets the depth for a particular image channel"
signature: "public int Imagick::getImageChannelDepth(int $channel)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.getimagechanneldepth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the depth for a particular image channel

## Description

```php
public int Imagick::getImageChannelDepth(int $channel)
```

Gets the depth for a particular image channel.

## Parameters

- **`$channel`** — Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to `Imagick::CHANNEL_DEFAULT`. Refer to this list of channel constants

## Return Values

Returns `true` on success.
