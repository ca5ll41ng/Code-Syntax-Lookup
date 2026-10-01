---
id: "en-php-function-function-ps-fill-stroke"
language: "php"
lang: "en"
category: "function"
name: "ps_fill_stroke"
title: "Fills and strokes the current path"
signature: "bool ps_fill_stroke(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-fill-stroke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fills and strokes the current path

## Description

```php
bool ps_fill_stroke(resource $psdoc)
```

Fills and draws the path constructed with previously called drawing functions like `ps_lineto()`.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_fill()` `ps_stroke()`
