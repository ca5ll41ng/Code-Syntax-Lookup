---
id: "en-php-function-function-gmp-pow"
language: "php"
lang: "en"
category: "function"
name: "gmp_pow"
title: "Raise number into power"
signature: "GMP gmp_pow(GMP|int|string $num, int $exponent)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-pow.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Raise number into power

## Description

```php
GMP gmp_pow(GMP|int|string $num, int $exponent)
```

Raise `$num` into power `$exponent`.

## Parameters

- **`$num`** — The base number. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$exponent`** — The positive power to raise the `$num`.

## Return Values

The new (raised) number, as a GMP number. The case of `0^0` yields 1.

## Examples

**`gmp_pow()` example**

```php


<?php
$pow1 = gmp_pow("2", 31);
echo gmp_strval($pow1) . "\n";
$pow2 = gmp_pow("0", 0);
echo gmp_strval($pow2) . "\n";
$pow3 = gmp_pow("2", -1); // Negative exp, generates warning
echo gmp_strval($pow3) . "\n";
?>

    
```

The above example will output:

```text


2147483648
1

    
```
