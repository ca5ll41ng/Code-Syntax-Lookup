---
id: "en-php-function-function-ps-setfont"
language: "php"
lang: "en"
category: "function"
name: "ps_setfont"
title: "Sets font to use for following output"
signature: "bool ps_setfont(resource $psdoc, int $fontid, float $size)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setfont.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets font to use for following output

## Description

```php
bool ps_setfont(resource $psdoc, int $fontid, float $size)
```

Sets a font, which has to be loaded before with `ps_findfont()`. Outputting text without setting a font results in an error.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$fontid`** — The font identifier as returned by `ps_findfont()`.
- **`$size`** — The size of the font.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_findfont()` `ps_set_text_pos()` for an example.
