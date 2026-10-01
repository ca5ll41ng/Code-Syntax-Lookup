---
id: "en-php-function-function-ps-setflat"
language: "php"
lang: "en"
category: "function"
name: "ps_setflat"
title: "Sets flatness"
signature: "bool ps_setflat(resource $psdoc, float $value)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-setflat.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets flatness

## Description

```php
bool ps_setflat(resource $psdoc, float $value)
```

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$value`** — The `$value` must be between 0.2 and 1.

## Return Values

Returns `true` on success or `false` on failure.
