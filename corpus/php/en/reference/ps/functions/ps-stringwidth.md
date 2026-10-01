---
id: "en-php-function-function-ps-stringwidth"
language: "php"
lang: "en"
category: "function"
name: "ps_stringwidth"
title: "Gets width of a string"
signature: "float ps_stringwidth(resource $psdoc, string $text, int $fontid = 0, float $size = 0.0)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-stringwidth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets width of a string

## Description

```php
float ps_stringwidth(resource $psdoc, string $text, int $fontid = 0, float $size = 0.0)
```

Calculates the width of a string in points if it was output in the given font and font size. This function needs an Adobe font metrics file to calculate the precise width. If kerning is turned on, it will be taken into account.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — The text for which the width is to be calculated.
- **`$fontid`** — The identifier of the font to be used. If not font is specified the current font will be used.
- **`$size`** — The size of the font. If no size is specified the current size is used.

## Return Values

Width of a string in points.

## See Also

`ps_string_geometry()`
