---
id: "en-php-function-function-gmp-powm"
language: "php"
lang: "en"
category: "function"
name: "gmp_powm"
title: "Raise number into power with modulo"
signature: "GMP gmp_powm(GMP|int|string $num, GMP|int|string $exponent, GMP|int|string $modulus)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-powm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Raise number into power with modulo

## Description

```php
GMP gmp_powm(GMP|int|string $num, GMP|int|string $exponent, GMP|int|string $modulus)
```

Calculate (`$num` raised into power `$exponent`) modulo `$modulus`. If `$exponent` is negative, result is undefined.

## Parameters

- **`$num`** — The base number. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$exponent`** — The positive power to raise the `$num`. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$modulus`** — The modulo. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

The new (raised) number, as a GMP number.

## Examples

**`gmp_powm()` example**

```php


<?php
$pow1 = gmp_powm("2", "31", "2147483649");
echo gmp_strval($pow1) . "\n";
?>

    
```

The above example will output:

```text


2147483648

    
```
