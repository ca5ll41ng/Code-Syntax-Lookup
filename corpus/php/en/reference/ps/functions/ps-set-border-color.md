---
id: "en-php-function-function-ps-set-border-color"
language: "php"
lang: "en"
category: "function"
name: "ps_set_border_color"
title: "Sets color of border for annotations"
signature: "bool ps_set_border_color(resource $psdoc, float $red, float $green, float $blue)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-set-border-color.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets color of border for annotations

## Description

```php
bool ps_set_border_color(resource $psdoc, float $red, float $green, float $blue)
```

Links added with one of the functions `ps_add_weblink()`, `ps_add_pdflink()`, etc. will be displayed with a surounded rectangle when the postscript document is converted to pdf and viewed in a pdf viewer. This rectangle is not visible in the postscript document. This function sets the color of the rectangle's border line.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$red`** — The red component of the border color.
- **`$green`** — The green component of the border color.
- **`$blue`** — The blue component of the border color.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_set_border_dash()` `ps_set_border_style()`
