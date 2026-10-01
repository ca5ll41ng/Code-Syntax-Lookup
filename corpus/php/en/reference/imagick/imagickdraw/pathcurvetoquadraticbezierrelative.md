---
id: "en-php-function-imagickdraw-pathcurvetoquadraticbezierrelative"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pathCurveToQuadraticBezierRelative"
title: "Draws a quadratic Bezier curve"
signature: "public bool ImagickDraw::pathCurveToQuadraticBezierRelative(float $x1, float $y1, float $x_end, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pathcurvetoquadraticbezierrelative.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a quadratic Bezier curve

## Description

```php
public bool ImagickDraw::pathCurveToQuadraticBezierRelative(float $x1, float $y1, float $x_end, float $y)
```

> This function is currently not documented; only its argument list is available.

Draws a quadratic Bezier curve from the current point to (x,y) using (x1,y1) as the control point using relative coordinates. At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

## Parameters

- **`$x1`** — starting x coordinate
- **`$y1`** — starting y coordinate
- **`$x_end`** — ending x coordinate
- **`$y`** — ending y coordinate

## Return Values

No value is returned.
