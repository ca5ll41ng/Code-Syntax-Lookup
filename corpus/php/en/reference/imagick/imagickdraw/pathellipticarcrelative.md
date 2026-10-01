---
id: "en-php-function-imagickdraw-pathellipticarcrelative"
language: "php"
lang: "en"
category: "function"
name: "ImagickDraw::pathEllipticArcRelative"
title: "Draws an elliptical arc"
signature: "public bool ImagickDraw::pathEllipticArcRelative(float $rx, float $ry, float $x_axis_rotation, bool $large_arc, bool $sweep, float $x, float $y)"
module: "imagick"
source_url: "https://www.php.net/manual/en/imagickdraw.pathellipticarcrelative.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws an elliptical arc

## Description

```php
public bool ImagickDraw::pathEllipticArcRelative(float $rx, float $ry, float $x_axis_rotation, bool $large_arc, bool $sweep, float $x, float $y)
```

> This function is currently not documented; only its argument list is available.

Draws an elliptical arc from the current point to (x, y) using relative coordinates. The size and orientation of the ellipse are defined by two radii (rx, ry) and an xAxisRotation, which indicates how the ellipse as a whole is rotated relative to the current coordinate system. The center (cx, cy) of the ellipse is calculated automatically to satisfy the constraints imposed by the other parameters. largeArcFlag and sweepFlag contribute to the automatic calculations and help determine how the arc is drawn. If `$large_arc` is `true` then draw the larger of the available arcs. If `$sweep` is true, then draw the arc matching a clock-wise rotation.

## Parameters

- **`$rx`** — x radius
- **`$ry`** — y radius
- **`$x_axis_rotation`** — x axis rotation
- **`$large_arc`** — large arc flag
- **`$sweep`** — sweep flag
- **`$x`** — x coordinate
- **`$y`** — y coordinate

## Return Values

No value is returned.
