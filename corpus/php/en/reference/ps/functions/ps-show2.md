---
id: "en-php-function-function-ps-show2"
language: "php"
lang: "en"
category: "function"
name: "ps_show2"
title: "Output a text at current position"
signature: "bool ps_show2(resource $psdoc, string $text, int $len)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-show2.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Output a text at current position

## Description

```php
bool ps_show2(resource $psdoc, string $text, int $len)
```

Output text at the current position. Do not print more than `$len` characters.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$text`** — The text to be output.
- **`$len`** — The maximum number of characters to print.

## Return Values

Returns `true` on success or `false` on failure.
