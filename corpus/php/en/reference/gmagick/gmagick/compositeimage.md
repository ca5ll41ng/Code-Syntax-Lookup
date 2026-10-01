---
id: "en-php-function-gmagick-compositeimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::compositeimage"
title: "Composite one image onto another"
signature: "public Gmagick Gmagick::compositeimage(Gmagick $source, int $COMPOSE, int $x, int $y)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.compositeimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Composite one image onto another

## Description

```php
public Gmagick Gmagick::compositeimage(Gmagick $source, int $COMPOSE, int $x, int $y)
```

Composite one image onto another at the specified offset.

## Parameters

- **`$source`** — `Gmagick` object which holds the composite image.
- **`$COMPOSE`** — Composite operator.
- **`$x`** — The column offset of the composited image.
- **`$y`** — The row offset of the composited image.

## Return Values

The `Gmagick` object with compositions.

## Errors/Exceptions

Throws an `GmagickException` on error.
