---
id: "en-php-function-function-ps-setdash"
language: "php"
lang: "en"
category: "function"
name: "ps_setdash"
title: "Sets appearance of a dashed line"
signature: "bool ps_setdash(resource $psdoc, float $on, float $off)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setdash.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets appearance of a dashed line

## Description

```php
bool ps_setdash(resource $psdoc, float $on, float $off)
```

Sets the length of the black and white portions of a dashed line.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$on`** — The length of the dash.
- **`$off`** — The length of the gap between dashes.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_setpolydash()`
