---
id: "en-php-function-function-ps-stroke"
language: "php"
lang: "en"
category: "function"
name: "ps_stroke"
title: "Draws the current path"
signature: "bool ps_stroke(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-stroke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Draws the current path

## Description

```php
bool ps_stroke(resource $psdoc)
```

Draws the path constructed with previously called drawing functions like `ps_lineto()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_closepath_stroke()` `ps_fill()` `ps_fill_stroke()`
