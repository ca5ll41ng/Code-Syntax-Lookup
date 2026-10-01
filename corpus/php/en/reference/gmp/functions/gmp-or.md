---
id: "en-php-function-function-gmp-or"
language: "php"
lang: "en"
category: "function"
name: "gmp_or"
title: "Bitwise OR"
signature: "GMP gmp_or(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-or.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bitwise OR

## Description

```php
GMP gmp_or(GMP|int|string $num1, GMP|int|string $num2)
```

Calculates bitwise inclusive OR of two GMP numbers.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_or()` example**

```php


<?php
$or1 = gmp_or("0xfffffff2", "4");
echo gmp_strval($or1, 16) . "\n";
$or2 = gmp_or("0xfffffff2", "2");
echo gmp_strval($or2, 16) . "\n";
?>

    
```

The above example will output:

```text


fffffff6
fffffff2

    
```
