---
id: "en-php-function-gmagickdraw-roundrectangle"
language: "php"
lang: "en"
category: "function"
name: "GmagickDraw::roundrectangle"
title: "Draws a rounded rectangle"
signature: "public GmagickDraw GmagickDraw::roundrectangle(float $x1, float $y1, float $x2, float $y2, float $rx, float $ry)"
module: "gmagick"
source_url: "https://www.php.net/manual/en/gmagickdraw.roundrectangle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a rounded rectangle

## Description

```php
public GmagickDraw GmagickDraw::roundrectangle(float $x1, float $y1, float $x2, float $y2, float $rx, float $ry)
```

Draws a rounded rectangle given two coordinates, x and y corner radiuses and using the current stroke, stroke width, and fill settings.

## Parameters

- **`$x1`** — x ordinate of first coordinate
- **`$y1`** — y ordinate of first coordinate
- **`$x2`** — x ordinate of second coordinate
- **`$y2`** — y ordinate of second coordinate
- **`$rx`** — radius of corner in horizontal direction
- **`$ry`** — radius of corner in vertical direction

## Return Values

The `GmagickDraw` object.
