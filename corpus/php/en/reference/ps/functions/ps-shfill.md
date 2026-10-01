---
id: "en-php-function-function-ps-shfill"
language: "php"
lang: "en"
category: "function"
name: "ps_shfill"
title: "Fills an area with a shading"
signature: "bool ps_shfill(resource $psdoc, int $shadingid)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-shfill.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fills an area with a shading

## Description

```php
bool ps_shfill(resource $psdoc, int $shadingid)
```

Fills an area with a shading, which has to be created before with `ps_shading()`. This is an alternative way to creating a pattern from a shading `ps_shading_pattern()` and using the pattern as the filling color.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$shadingid`** — The identifier of a shading previously created with `ps_shading()`.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_shading()` `ps_shading_pattern()`
