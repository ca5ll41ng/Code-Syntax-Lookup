---
id: "en-php-function-gmagick-solarizeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::solarizeimage"
title: "Applies a solarizing effect to the image"
signature: "public Gmagick Gmagick::solarizeimage(int $threshold)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.solarizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Applies a solarizing effect to the image

## Description

```php
public Gmagick Gmagick::solarizeimage(int $threshold)
```

Applies a special effect to the image, similar to the effect achieved in a photo darkroom by selectively exposing areas of photo sensitive paper to light. Threshold ranges from 0 to QuantumRange and is a measure of the extent of the solarization.

## Parameters

- **`$threshold`** — Define the extent of the solarization.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
