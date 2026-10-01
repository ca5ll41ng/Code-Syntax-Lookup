---
id: "en-php-function-function-ps-symbol-width"
language: "php"
lang: "en"
category: "function"
name: "ps_symbol_width"
title: "Gets width of a glyph"
signature: "float ps_symbol_width(resource $psdoc, int $ord, int $fontid = 0, float $size = 0.0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-symbol-width.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets width of a glyph

## Description

```php
float ps_symbol_width(resource $psdoc, int $ord, int $fontid = 0, float $size = 0.0)
```

Calculates the width of a glyph in points if it was output in the given font and font size. This function needs an Adobe font metrics file to calculate the precise width.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$ord`** — The position of the glyph in the font encoding vector.
- **`$fontid`** — The identifier of the font to be used. If not font is specified the current font will be used.
- **`$size`** — The size of the font. If no size is specified the current size is used.

## Return Values

The width of a glyph in points.

## See Also

`ps_symbol()` `ps_symbol_name()`
