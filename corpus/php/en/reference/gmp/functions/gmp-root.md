---
id: "en-php-function-function-gmp-root"
language: "php"
lang: "en"
category: "function"
name: "gmp_root"
title: "Take the integer part of nth root"
signature: "GMP gmp_root(GMP|int|string $num, int $nth)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-root.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Take the integer part of nth root

## Description

```php
GMP gmp_root(GMP|int|string $num, int $nth)
```

Takes the `$nth` root of `$num` and returns the integer component of the result.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$nth`** — The positive root to take of `$num`.

## Return Values

The integer component of the resultant root, as a GMP number.
