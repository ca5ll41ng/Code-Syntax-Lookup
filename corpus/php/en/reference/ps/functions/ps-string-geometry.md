---
id: "en-php-function-function-ps-string-geometry"
language: "php"
lang: "en"
category: "function"
name: "ps_string_geometry"
title: "Gets geometry of a string"
signature: "array ps_string_geometry(resource $psdoc, string $text, int $fontid = 0, float $size = 0.0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-string-geometry.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets geometry of a string

## Description

```php
array ps_string_geometry(resource $psdoc, string $text, int $fontid = 0, float $size = 0.0)
```

This function is similar to `ps_stringwidth()` but returns an array of dimensions containing the width, ascender, and descender of the text.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — The text for which the geometry is to be calculated.
- **`$fontid`** — The identifier of the font to be used. If not font is specified the current font will be used.
- **`$size`** — The size of the font. If no size is specified the current size is used.

## Return Values

An array of the dimensions of a string. The element 'width' contains the width of the string as returned by `ps_stringwidth()`. The element 'descender' contains the maximum descender and 'ascender' the maximum ascender of the string.

## See Also

`ps_continue_text()` `ps_stringwidth()`
