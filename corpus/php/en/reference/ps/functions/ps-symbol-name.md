---
id: "en-php-function-function-ps-symbol-name"
language: "php"
lang: "en"
category: "function"
name: "ps_symbol_name"
title: "Gets name of a glyph"
signature: "string ps_symbol_name(resource $psdoc, int $ord, int $fontid = 0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-symbol-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets name of a glyph

## Description

```php
string ps_symbol_name(resource $psdoc, int $ord, int $fontid = 0)
```

This function needs an Adobe font metrics file to know which glyphs are available.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$ord`** — The parameter `$ord` is the position of the glyph in the font encoding vector.
- **`$fontid`** — The identifier of the font to be used. If not font is specified the current font will be used.

## Return Values

The name of a glyph in the given font.

## See Also

`ps_symbol()` `ps_symbol_width()`
