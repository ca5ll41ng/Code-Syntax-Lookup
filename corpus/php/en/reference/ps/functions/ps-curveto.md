---
id: "en-php-function-function-ps-curveto"
language: "php"
lang: "en"
category: "function"
name: "ps_curveto"
title: "Draws a curve"
signature: "bool ps_curveto(resource $psdoc, float $x1, float $y1, float $x2, float $y2, float $x3, float $y3)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-curveto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a curve

## Description

```php
bool ps_curveto(resource $psdoc, float $x1, float $y1, float $x2, float $y2, float $x3, float $y3)
```

Add a section of a cubic Bézier curve described by the three given control points to the current path.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x1`** — x-coordinate of first control point.
- **`$y1`** — y-coordinate of first control point.
- **`$x2`** — x-coordinate of second control point.
- **`$y2`** — y-coordinate of second control point.
- **`$x3`** — x-coordinate of third control point.
- **`$y3`** — y-coordinate of third control point.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_lineto()`
