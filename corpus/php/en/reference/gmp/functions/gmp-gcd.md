---
id: "en-php-function-function-gmp-gcd"
language: "php"
lang: "en"
category: "function"
name: "gmp_gcd"
title: "Calculate GCD"
signature: "GMP gmp_gcd(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-gcd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate GCD

## Description

```php
GMP gmp_gcd(GMP|int|string $num1, GMP|int|string $num2)
```

Calculate greatest common divisor of `$num1` and `$num2`. The result is always positive even if either of, or both, input operands are negative.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A positive GMP number that divides into both `$num1` and `$num2`.

## Examples

**`gmp_gcd()` example**

```php


<?php
$gcd = gmp_gcd("12", "21");
echo gmp_strval($gcd) . "\n";
?>

    
```

The above example will output:

```text


3

    
```

## See Also

 `gmp_lcm()`
