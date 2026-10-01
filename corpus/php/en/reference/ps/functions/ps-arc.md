---
id: "en-php-function-function-ps-arc"
language: "php"
lang: "en"
category: "function"
name: "ps_arc"
title: "Draws an arc counterclockwise"
signature: "bool ps_arc(resource $psdoc, float $x, float $y, float $radius, float $alpha, float $beta)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-arc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws an arc counterclockwise

## Description

```php
bool ps_arc(resource $psdoc, float $x, float $y, float $radius, float $alpha, float $beta)
```

Draws a portion of a circle with at middle point at (`$x`, `$y`). The arc starts at an angle of `$alpha` and ends at an angle of `$beta`. It is drawn counterclockwise (use `ps_arcn()` to draw clockwise). The subpath added to the current path starts on the arc at angle `$alpha` and ends on the arc at angle `$beta`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — The x-coordinate of the circle's middle point.
- **`$y`** — The y-coordinate of the circle's middle point.
- **`$radius`** — The radius of the circle
- **`$alpha`** — The start angle given in degrees.
- **`$beta`** — The end angle given in degrees.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_arcn()`
