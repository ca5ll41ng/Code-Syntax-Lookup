---
id: "en-php-function-function-gmp-and"
language: "php"
lang: "en"
category: "function"
name: "gmp_and"
title: "Bitwise AND"
signature: "GMP gmp_and(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-and.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bitwise AND

## Description

```php
GMP gmp_and(GMP|int|string $num1, GMP|int|string $num2)
```

Calculates bitwise AND of two GMP numbers.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A GMP number representing the bitwise `AND` comparison.

## Examples

**`gmp_and()` example**

```php


<?php
$and1 = gmp_and("0xfffffffff4", "0x4");
$and2 = gmp_and("0xfffffffff4", "0x8");
echo gmp_strval($and1) . "\n";
echo gmp_strval($and2) . "\n";
?>

   
```

The above example will output:

```text


4
0

   
```
