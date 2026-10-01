---
id: "en-php-function-gmagick-annotateimage"
language: "php"
lang: "en"
category: "function"
name: "Gmagick::annotateimage"
title: "Annotates an image with text"
signature: "public Gmagick Gmagick::annotateimage(GmagickDraw $GmagickDraw, float $x, float $y, float $angle, string $text)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagick.annotateimage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Annotates an image with text

## Description

```php
public Gmagick Gmagick::annotateimage(GmagickDraw $GmagickDraw, float $x, float $y, float $angle, string $text)
```

Annotates an image with text.

## Parameters

- **`$GmagickDraw`** — The `GmagickDraw` object that contains settings for drawing the text.
- **`$x`** — Horizontal offset in pixels to the left of text.
- **`$y`** — Vertical offset in pixels to the baseline of text.
- **`$angle`** — The angle at which to write the text.
- **`$text`** — The string to draw.

## Return Values

The `Gmagick` object with annotation made.

## Errors/Exceptions

Throws an `GmagickException` on error.
