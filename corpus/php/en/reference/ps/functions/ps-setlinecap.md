---
id: "en-php-function-function-ps-setlinecap"
language: "php"
lang: "en"
category: "function"
name: "ps_setlinecap"
title: "Sets appearance of line ends"
signature: "bool ps_setlinecap(resource $psdoc, int $type)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setlinecap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets appearance of line ends

## Description

```php
bool ps_setlinecap(resource $psdoc, int $type)
```

Sets how line ends look like.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$type`** — The type of line ends. Possible values are `PS_LINECAP_BUTT`, `PS_LINECAP_ROUND`, or `PS_LINECAP_SQUARED`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_setlinejoin()` `ps_setlinewidth()` `ps_setmiterlimit()`
