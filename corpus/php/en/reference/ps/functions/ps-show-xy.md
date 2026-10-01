---
id: "en-php-function-function-ps-show-xy"
language: "php"
lang: "en"
category: "function"
name: "ps_show_xy"
title: "Output text at given position"
signature: "bool ps_show_xy(resource $psdoc, string $text, float $x, float $y)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-show-xy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output text at given position

## Description

```php
bool ps_show_xy(resource $psdoc, string $text, float $x, float $y)
```

Output a text at the given text position.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — The text to be output.
- **`$x`** — x-coordinate of the lower left corner of the box surrounding the text.
- **`$y`** — y-coordinate of the lower left corner of the box surrounding the text.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_continue_text()` `ps_show()`
