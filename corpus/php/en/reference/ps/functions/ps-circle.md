---
id: "en-php-function-function-ps-circle"
language: "php"
lang: "en"
category: "function"
name: "ps_circle"
title: "Draws a circle"
signature: "bool ps_circle(resource $psdoc, float $x, float $y, float $radius)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-circle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a circle

## Description

```php
bool ps_circle(resource $psdoc, float $x, float $y, float $radius)
```

Draws a circle with its middle point at (`$x`, `$y`). The circle starts and ends at position (`$x`+`$radius`, `$y`). If this function is called outside a path it will start a new path. If it is called within a path it will add the circle as a subpath. If the last drawing operation does not end in point (`$x`+`$radius`, `$y`) then there will be a gap in the path.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — The x-coordinate of the circle's middle point.
- **`$y`** — The y-coordinate of the circle's middle point.
- **`$radius`** — The radius of the circle

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_arc()` `ps_arcn()`
