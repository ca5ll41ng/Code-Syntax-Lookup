---
id: "en-php-function-function-ps-closepath-stroke"
language: "php"
lang: "en"
category: "function"
name: "ps_closepath_stroke"
title: "Closes and strokes path"
signature: "bool ps_closepath_stroke(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-closepath-stroke.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes and strokes path

## Description

```php
bool ps_closepath_stroke(resource $psdoc)
```

Connects the last point with first point of a path and draws the resulting closed line.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_closepath()`
