---
id: "en-php-function-function-gmp-xor"
language: "php"
lang: "en"
category: "function"
name: "gmp_xor"
title: "Bitwise XOR"
signature: "GMP gmp_xor(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-xor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bitwise XOR

## Description

```php
GMP gmp_xor(GMP|int|string $num1, GMP|int|string $num2)
```

Calculates bitwise exclusive OR (XOR) of two GMP numbers.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_xor()` example**

```php


<?php
$xor1 = gmp_init("1101101110011101", 2);
$xor2 = gmp_init("0110011001011001", 2);

$xor3 = gmp_xor($xor1, $xor2);

echo gmp_strval($xor3, 2) . "\n";
?>

    
```

The above example will output:

```text


1011110111000100

    
```
