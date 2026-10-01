---
id: "en-php-function-function-ps-closepath"
language: "php"
lang: "en"
category: "function"
name: "ps_closepath"
title: "Closes path"
signature: "bool ps_closepath(resource $psdoc)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-closepath.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes path

## Description

```php
bool ps_closepath(resource $psdoc)
```

Connects the last point with the first point of a path. The resulting path can be used for stroking, filling, clipping, etc..

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_clip()` `ps_closepath_stroke()`
