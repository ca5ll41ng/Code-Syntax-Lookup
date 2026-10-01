---
id: "en-php-function-gmagick-raiseimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::raiseimage"
title: "Creates a simulated 3d button-like effect"
signature: "public Gmagick Gmagick::raiseimage(int $width, int $height, int $x, int $y, bool $raise)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.raiseimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a simulated 3d button-like effect

## Description

```php
public Gmagick Gmagick::raiseimage(int $width, int $height, int $x, int $y, bool $raise)
```

Creates a simulated three-dimensional button-like effect by lightening and darkening the edges of the image. Members width and height of raise_info define the width of the vertical and horizontal edge of the effect.

## Parameters

- **`$width`** — Width of the area to raise.
- **`$height`** — Height of the area to raise.
- **`$x`** — X coordinate.
- **`$y`** — Y coordinate.
- **`$raise`** — A value other than zero creates a 3-D raise effect, otherwise it has a lowered effect.

## Return Values

The `Gmagick` object.

## Errors/Exceptions

Throws an `GmagickException` on error.
