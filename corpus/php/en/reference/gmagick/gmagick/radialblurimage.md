---
id: "en-php-function-gmagick-radialblurimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::radialblurimage"
title: "Radial blurs an image"
signature: "public Gmagick Gmagick::radialblurimage(float $angle, int $channel = Gmagick::CHANNEL_DEFAULT)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.radialblurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Radial blurs an image

## Description

```php
public Gmagick Gmagick::radialblurimage(float $angle, int $channel = Gmagick::CHANNEL_DEFAULT)
```

Radial blurs an image.

## Parameters

- **`$angle`** — The angle of the blur in degrees.
- **`$channel`** — Related channel.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
