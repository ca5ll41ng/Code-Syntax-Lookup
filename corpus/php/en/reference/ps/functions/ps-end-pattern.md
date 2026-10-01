---
id: "en-php-function-function-ps-end-pattern"
language: "php"
lang: "en"
category: "function"
name: "ps_end_pattern"
title: "End a pattern"
signature: "bool ps_end_pattern(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-end-pattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# End a pattern

## Description

```php
bool ps_end_pattern(resource $psdoc)
```

Ends a pattern which was started with `ps_begin_pattern()`. Once a pattern has been ended, it can be used like a color to fill areas.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_begin_pattern()`
