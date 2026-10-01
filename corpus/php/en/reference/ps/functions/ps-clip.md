---
id: "en-php-function-function-ps-clip"
language: "php"
lang: "en"
category: "function"
name: "ps_clip"
title: "Clips drawing to current path"
signature: "bool ps_clip(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-clip.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clips drawing to current path

## Description

```php
bool ps_clip(resource $psdoc)
```

Takes the current path and uses it to define the border of a clipping area. Everything drawn outside of that area will not be visible.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_closepath()`
