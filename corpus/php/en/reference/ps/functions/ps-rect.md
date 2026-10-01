---
id: "en-php-function-function-ps-rect"
language: "php"
lang: "en"
category: "function"
name: "ps_rect"
title: "Draws a rectangle"
signature: "bool ps_rect(resource $psdoc, float $x, float $y, float $width, float $height)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-rect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws a rectangle

## Description

```php
bool ps_rect(resource $psdoc, float $x, float $y, float $width, float $height)
```

Draws a rectangle with its lower left corner at (`$x`, `$y`). The rectangle starts and ends in its lower left corner. If this function is called outside a path it will start a new path. If it is called within a path it will add the rectangle as a subpath. If the last drawing operation does not end in the lower left corner then there will be a gap in the path.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — x-coordinate of the lower left corner of the rectangle.
- **`$y`** — y-coordinate of the lower left corner of the rectangle.
- **`$width`** — The width of the image.
- **`$height`** — The height of the image.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_arc()` `ps_circle()` `ps_lineto()`
