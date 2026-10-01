---
id: "en-php-function-gmagick-cyclecolormapimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::cyclecolormapimage"
title: "Displaces an image's colormap"
signature: "public Gmagick Gmagick::cyclecolormapimage(int $displace)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.cyclecolormapimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Displaces an image's colormap

## Description

```php
public Gmagick Gmagick::cyclecolormapimage(int $displace)
```

Displaces an image's colormap by a given number of positions. If you cycle the colormap a number of times you can produce a psychedelic effect.

## Parameters

- **`$displace`** — The amount to displace the colormap.

## Return Values

Returns self on success.

## Errors/Exceptions

Throws an `GmagickException` on error.
