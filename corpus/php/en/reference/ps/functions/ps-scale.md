---
id: "en-php-function-function-ps-scale"
language: "php"
lang: "en"
category: "function"
name: "ps_scale"
title: "Sets scaling factor"
signature: "bool ps_scale(resource $psdoc, float $x, float $y)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-scale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets scaling factor

## Description

```php
bool ps_scale(resource $psdoc, float $x, float $y)
```

Sets horizontal and vertical scaling of the coordinate system.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — Scaling factor in horizontal direction.
- **`$y`** — Scaling factor in vertical direction.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_rotate()` `ps_translate()`
