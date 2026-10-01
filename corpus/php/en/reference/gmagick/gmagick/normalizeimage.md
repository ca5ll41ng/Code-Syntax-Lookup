---
id: "en-php-function-gmagick-normalizeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::normalizeimage"
title: "Enhances the contrast of a color image"
signature: "public Gmagick Gmagick::normalizeimage([int $channel = ...])"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.normalizeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Enhances the contrast of a color image

## Description

```php
public Gmagick Gmagick::normalizeimage([int $channel = ...])
```

Enhances the contrast of a color image by adjusting the pixels color to span the entire range of colors available.

## Parameters

- **`$channel`** — Identify which channel to normalize.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
