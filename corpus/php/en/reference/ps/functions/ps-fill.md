---
id: "en-php-function-function-ps-fill"
language: "php"
lang: "en"
category: "function"
name: "ps_fill"
title: "Fills the current path"
signature: "bool ps_fill(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-fill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fills the current path

## Description

```php
bool ps_fill(resource $psdoc)
```

Fills the path constructed with previously called drawing functions like `ps_lineto()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_fill_stroke()` `ps_stroke()`
