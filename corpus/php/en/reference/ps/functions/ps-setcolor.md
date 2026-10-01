---
id: "en-php-function-function-ps-setcolor"
language: "php"
lang: "en"
category: "function"
name: "ps_setcolor"
title: "Sets current color"
signature: "bool ps_setcolor(resource $psdoc, string $type, string $colorspace, float $c1, float $c2, float $c3, float $c4)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setcolor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets current color

## Description

```php
bool ps_setcolor(resource $psdoc, string $type, string $colorspace, float $c1, float $c2, float $c3, float $c4)
```

Sets the color for drawing, filling, or both.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$type`** — The parameter `$type` can be `both`, `fill`, or `fillstroke`.
- **`$colorspace`** — The colorspace should be one of `gray`, `rgb`, `cmyk`, `spot`, `pattern`. Depending on the colorspace either only the first, the first three or all parameters will be used.
- **`$c1`** — Depending on the colorspace this is either the red component (rgb), the cyan component (cmyk), the gray value (gray), the identifier of the spot color or the identifier of the pattern.
- **`$c2`** — Depending on the colorspace this is either the green component (rgb), the magenta component (cmyk).
- **`$c3`** — Depending on the colorspace this is either the blue component (rgb), the yellow component (cmyk).
- **`$c4`** — This must only be set in cmyk colorspace and specifies the black component.

## Return Values

Returns `true` on success or `false` on failure.

## Notes

> The second parameter is currently not always evaluated. The color is sometimes set for filling and drawing just as if `fillstroke` were passed.
