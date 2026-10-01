---
id: "en-php-function-function-gmp-kronecker"
language: "php"
lang: "en"
category: "function"
name: "gmp_kronecker"
title: "Kronecker symbol"
signature: "int gmp_kronecker(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-kronecker.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Kronecker symbol

## Description

```php
int gmp_kronecker(GMP|int|string $num1, GMP|int|string $num2)
```

This function computes the Kronecker symbol of `$num1` and `$num2`.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns the Kronecker symbol of `$num1` and `$num2`

## See Also

 `gmp_jacobi()` `gmp_legendre()`
