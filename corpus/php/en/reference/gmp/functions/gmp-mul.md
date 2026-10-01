---
id: "en-php-function-function-gmp-mul"
language: "php"
lang: "en"
category: "function"
name: "gmp_mul"
title: "Multiply numbers"
signature: "GMP gmp_mul(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-mul.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Multiply numbers

## Description

```php
GMP gmp_mul(GMP|int|string $num1, GMP|int|string $num2)
```

Multiplies `$num1` by `$num2` and returns the result.

## Parameters

- **`$num1`** — A number that will be multiplied by `$num2`. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A number that will be multiplied by `$num1`. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_mul()` example**

```php


<?php
$mul = gmp_mul("12345678", "2000");
echo gmp_strval($mul) . "\n";
?>

    
```

The above example will output:

```text


24691356000

    
```
