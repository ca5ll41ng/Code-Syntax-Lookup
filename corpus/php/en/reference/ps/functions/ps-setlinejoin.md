---
id: "en-php-function-function-ps-setlinejoin"
language: "php"
lang: "en"
category: "function"
name: "ps_setlinejoin"
title: "Sets how contected lines are joined"
signature: "bool ps_setlinejoin(resource $psdoc, int $type)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setlinejoin.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets how contected lines are joined

## Description

```php
bool ps_setlinejoin(resource $psdoc, int $type)
```

Sets how lines are joined.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$type`** — The way lines are joined. Possible values are `PS_LINEJOIN_MITER`, `PS_LINEJOIN_ROUND`, or `PS_LINEJOIN_BEVEL`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_setlinecap()` `ps_setlinewidth()` `ps_setmiterlimit()`
