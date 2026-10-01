---
id: "en-php-function-gmagick-spreadimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::spreadimage"
title: "Randomly displaces each pixel in a block"
signature: "public Gmagick Gmagick::spreadimage(float $radius)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.spreadimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Randomly displaces each pixel in a block

## Description

```php
public Gmagick Gmagick::spreadimage(float $radius)
```

Special effects method that randomly displaces each pixel in a block defined by the radius parameter.

## Parameters

- **`$radius`** — Choose a random pixel in a neighborhood of this extent.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
