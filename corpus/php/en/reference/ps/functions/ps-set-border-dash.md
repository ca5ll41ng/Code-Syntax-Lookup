---
id: "en-php-function-function-ps-set-border-dash"
language: "php"
lang: "en"
category: "function"
name: "ps_set_border_dash"
title: "Sets length of dashes for border of annotations"
signature: "bool ps_set_border_dash(resource $psdoc, float $black, float $white)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-set-border-dash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets length of dashes for border of annotations

## Description

```php
bool ps_set_border_dash(resource $psdoc, float $black, float $white)
```

Links added with one of the functions `ps_add_weblink()`, `ps_add_pdflink()`, etc. will be displayed with a surounded rectangle when the postscript document is converted to pdf and viewed in a pdf viewer. This rectangle is not visible in the postscript document. This function sets the length of the black and white portion of a dashed border line.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$black`** — The length of the dash.
- **`$white`** — The length of the gap between dashes.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_set_border_color()` `ps_set_border_style()`
