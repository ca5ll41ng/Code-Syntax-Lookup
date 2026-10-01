---
id: "en-php-function-gmagick-blurimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::blurimage"
title: "Adds blur filter to image"
signature: "public Gmagick Gmagick::blurimage(float $radius, float $sigma, [int $channel = ...])"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.blurimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Adds blur filter to image

## Description

```php
public Gmagick Gmagick::blurimage(float $radius, float $sigma, [int $channel = ...])
```

Adds blur filter to image.

## Parameters

- **`$radius`** — Blur radius
- **`$sigma`** — Standard deviation

## Return Values

The blurred `Gmagick` object

## Errors/Exceptions

Throws an `GmagickException` on error.
