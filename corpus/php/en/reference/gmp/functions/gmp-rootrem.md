---
id: "en-php-function-function-gmp-rootrem"
language: "php"
lang: "en"
category: "function"
name: "gmp_rootrem"
title: "Take the integer part and remainder of nth root"
signature: "array gmp_rootrem(GMP|int|string $num, int $nth)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-rootrem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Take the integer part and remainder of nth root

## Description

```php
array gmp_rootrem(GMP|int|string $num, int $nth)
```

Takes the `$nth` root of `$num` and returns the integer component and remainder of the result.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$nth`** — The positive root to take of `$num`.

## Return Values

A two element array, where the first element is the integer component of the root, and the second element is the remainder, both represented as GMP numbers.
