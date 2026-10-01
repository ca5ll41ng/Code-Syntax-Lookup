---
id: "en-php-function-function-ps-continue-text"
language: "php"
lang: "en"
category: "function"
name: "ps_continue_text"
title: "Continue text in next line"
signature: "bool ps_continue_text(resource $psdoc, string $text)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-continue-text.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Continue text in next line

## Description

```php
bool ps_continue_text(resource $psdoc, string $text)
```

Output a text one line below the last line. The line spacing is taken from the value "leading" which must be set with `ps_set_value()`. The actual position of the text is determined by the values "textx" and "texty" which can be requested with `ps_get_value()`

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — The text to output.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_show()` `ps_show_xy()` `ps_show_boxed()`
