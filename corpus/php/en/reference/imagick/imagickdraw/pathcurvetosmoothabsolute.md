---
id: "en-php-function-imagickdraw-pathcurvetosmoothabsolute"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pathCurveToSmoothAbsolute"
title: "Draws a cubic Bezier curve"
signature: "public bool ImagickDraw::pathCurveToSmoothAbsolute(float $x2, float $y2, float $x, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pathcurvetosmoothabsolute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a cubic Bezier curve

## Description

```php
public bool ImagickDraw::pathCurveToSmoothAbsolute(float $x2, float $y2, float $x, float $y)
```

> This function is currently not documented; only its argument list is available.

Draws a cubic Bezier curve from the current point to (x,y) using absolute coordinates. The first control point is assumed to be the reflection of the second control point on the previous command relative to the current point. (If there is no previous command or if the previous command was not an DrawPathCurveToAbsolute, DrawPathCurveToRelative, DrawPathCurveToSmoothAbsolute or DrawPathCurveToSmoothRelative, assume the first control point is coincident with the current point.) (x2,y2) is the second control point (i.e., the control point at the end of the curve). At the end of the command, the new current point becomes the final (x,y) coordinate pair used in the polybezier.

## Parameters

- **`$x2`** — x coordinate of the second control point
- **`$y2`** — y coordinate of the second control point
- **`$x`** — x coordinate of the ending point
- **`$y`** — y coordinate of the ending point

## Return Values

No value is returned.
