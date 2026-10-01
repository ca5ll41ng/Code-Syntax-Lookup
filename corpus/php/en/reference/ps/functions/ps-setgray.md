---
id: "en-php-function-function-ps-setgray"
language: "php"
lang: "en"
category: "function"
name: "ps_setgray"
title: "Sets gray value"
signature: "bool ps_setgray(resource $psdoc, float $gray)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setgray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets gray value

## Description

```php
bool ps_setgray(resource $psdoc, float $gray)
```

Sets the gray value for all following drawing operations.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$gray`** — The value must be between 0 (white) and 1 (black).

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_setcolor()`
