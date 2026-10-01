---
id: "en-php-function-imagick-cyclecolormapimage"
language: "php"
lang: "en"
category: "function"
name: "Imagick::cycleColormapImage"
title: "Displaces an image's colormap"
signature: "public bool Imagick::cycleColormapImage(int $displace)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagick.cyclecolormapimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Displaces an image's colormap

## Description

```php
public bool Imagick::cycleColormapImage(int $displace)
```

Displaces an image's colormap by a given number of positions. If you cycle the colormap a number of times you can produce a psychedelic effect.

## Parameters

- **`$displace`** — The amount to displace the colormap.

## Return Values

Returns `true` on success.

## Errors/Exceptions

Throws ImagickException on error.
