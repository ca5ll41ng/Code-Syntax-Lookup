---
id: "en-php-function-imagickdraw-pathcurvetorelative"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pathCurveToRelative"
title: "Draws a cubic Bezier curve"
signature: "public bool ImagickDraw::pathCurveToRelative(float $x1, float $y1, float $x2, float $y2, float $x, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pathcurvetorelative.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a cubic Bezier curve

## Description

```php
public bool ImagickDraw::pathCurveToRelative(float $x1, float $y1, float $x2, float $y2, float $x, float $y)
```

> This function is currently not documented; only its argument list is available.

Draws a cubic Bezier curve from the current point to (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve using relative coordinates. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

## Parameters

- **`$x1`** — x coordinate of starting control point
- **`$y1`** — y coordinate of starting control point
- **`$x2`** — x coordinate of ending control point
- **`$y2`** — y coordinate of ending control point
- **`$x`** — ending x coordinate
- **`$y`** — ending y coordinate

## Return Values

No value is returned.
