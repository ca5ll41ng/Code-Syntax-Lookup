---
id: "en-php-function-gmagick-separateimagechannel"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::separateimagechannel"
title: "Separates a channel from the image"
signature: "public Gmagick Gmagick::separateimagechannel(int $channel)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.separateimagechannel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Separates a channel from the image

## Description

```php
public Gmagick Gmagick::separateimagechannel(int $channel)
```

Separates a channel from the image and returns a grayscale image. A channel is a particular color component of each pixel in the image.

## Parameters

- **`$channel`** — One of the Channel constant (`Gmagick::CHANNEL_*`).

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
