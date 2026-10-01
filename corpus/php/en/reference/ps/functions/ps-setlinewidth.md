---
id: "en-php-function-function-ps-setlinewidth"
language: "php"
lang: "en"
category: "function"
name: "ps_setlinewidth"
title: "Sets width of a line"
signature: "bool ps_setlinewidth(resource $psdoc, float $width)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setlinewidth.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets width of a line

## Description

```php
bool ps_setlinewidth(resource $psdoc, float $width)
```

Sets the line width for all following drawing operations.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$width`** — The width of lines in points.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_setlinecap()` `ps_setlinejoin()` `ps_setmiterlimit()`
