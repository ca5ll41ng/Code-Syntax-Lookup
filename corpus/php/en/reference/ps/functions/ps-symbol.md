---
id: "en-php-function-function-ps-symbol"
language: "php"
lang: "en"
category: "function"
name: "ps_symbol"
title: "Output a glyph"
signature: "bool ps_symbol(resource $psdoc, int $ord)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-symbol.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output a glyph

## Description

```php
bool ps_symbol(resource $psdoc, int $ord)
```

Output the glyph at position `$ord` in the font encoding vector of the current font. The font encoding for a font can be set when loading the font with `ps_findfont()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$ord`** — The position of the glyph in the font encoding vector.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_symbol_name()` `ps_symbol_width()`
