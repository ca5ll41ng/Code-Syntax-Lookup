---
id: "en-php-function-function-ps-shading-pattern"
language: "php"
lang: "en"
category: "function"
name: "ps_shading_pattern"
title: "Creates a pattern based on a shading"
signature: "int|false ps_shading_pattern(resource $psdoc, int $shadingid, string $optlist)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-shading-pattern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a pattern based on a shading

## Description

```php
int|false ps_shading_pattern(resource $psdoc, int $shadingid, string $optlist)
```

Creates a pattern based on a shading, which has to be created before with `ps_shading()`. Shading patterns can be used like regular patterns.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$shadingid`** — The identifier of a shading previously created with `ps_shading()`.
- **`$optlist`** — This argument is not currently used.

## Return Values

The identifier of the pattern or `false` on failure.

## See Also

`ps_shading()` `ps_shfill()`
