---
id: "en-php-function-function-ps-moveto"
language: "php"
lang: "en"
category: "function"
name: "ps_moveto"
title: "Sets current point"
signature: "bool ps_moveto(resource $psdoc, float $x, float $y)"
module: "ps"
source_url: "https://www.php.net/manual/en/function.ps-moveto.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets current point

## Description

```php
bool ps_moveto(resource $psdoc, float $x, float $y)
```

Sets the current point to new coordinates. If this is the first call of `ps_moveto()` after a previous path has been ended then it will start a new path. If this function is called in the middle of a path it will just set the current point and start a subpath.

## Parameters

- **`$psdoc`** — Resource identifier of the postscript file as returned by `ps_new()`.
- **`$x`** — x-coordinate of the point to move to.
- **`$y`** — y-coordinate of the point to move to.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

`ps_lineto()`
