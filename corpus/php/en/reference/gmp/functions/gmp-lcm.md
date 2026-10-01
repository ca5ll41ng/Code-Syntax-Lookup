---
id: "en-php-function-function-gmp-lcm"
language: "php"
lang: "en"
category: "function"
name: "gmp_lcm"
title: "Calculate LCM"
signature: "GMP gmp_lcm(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-lcm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate LCM

## Description

```php
GMP gmp_lcm(GMP|int|string $num1, GMP|int|string $num2)
```

This function computes the least common multiple (lcm) of `$num1` and `$num2`.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## See Also

 `gmp_gcd()`
