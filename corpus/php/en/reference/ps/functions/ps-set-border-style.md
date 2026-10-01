---
id: "en-php-function-function-ps-set-border-style"
language: "php"
lang: "en"
category: "function"
name: "ps_set_border_style"
title: "Sets border style of annotations"
signature: "bool ps_set_border_style(resource $psdoc, string $style, float $width)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-set-border-style.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets border style of annotations

## Description

```php
bool ps_set_border_style(resource $psdoc, string $style, float $width)
```

Links added with one of the functions `ps_add_weblink()`, `ps_add_pdflink()`, etc. will be displayed with a surounded rectangle when the postscript document is converted to pdf and viewed in a pdf viewer. This rectangle is not visible in the postscript document. This function sets the appearance and width of the border line.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$style`** — `$style` can be `solid` or `dashed`.
- **`$width`** — The line width of the border.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_set_border_color()` `ps_set_border_dash()`
