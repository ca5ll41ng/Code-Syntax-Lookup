---
id: "en-php-function-function-gmp-jacobi"
language: "php"
lang: "en"
category: "function"
name: "gmp_jacobi"
title: "Jacobi symbol"
signature: "int gmp_jacobi(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-jacobi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Jacobi symbol

## Description

```php
int gmp_jacobi(GMP|int|string $num1, GMP|int|string $num2)
```

Computes [Jacobi symbol]() of `$num1` and `$num2`. `$num2` should be odd and must be positive.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0). — Should be odd and must be positive.

## Return Values

A `GMP` object.

## Examples

**`gmp_jacobi()` example**

```php


<?php
echo gmp_jacobi("1", "3") . "\n";
echo gmp_jacobi("2", "3") . "\n";
?>

    
```

The above example will output:

```text


1
0

    
```

## See Also

 `gmp_kronecker()` `gmp_legendre()`
