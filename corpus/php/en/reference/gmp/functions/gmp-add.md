---
id: "en-php-function-function-gmp-add"
language: "php"
lang: "en"
category: "function"
name: "gmp_add"
title: "Add numbers"
signature: "GMP gmp_add(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add numbers

## Description

```php
GMP gmp_add(GMP|int|string $num1, GMP|int|string $num2)
```

Add two numbers.

## Parameters

- **`$num1`** — The first summand (augend). — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — The second summand (addend). — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A GMP number representing the sum of the arguments.

## Examples

**`gmp_add()` example**

```php


<?php
$sum = gmp_add("123456789012345", "76543210987655");
echo gmp_strval($sum) . "\n";
?>

    
```

The above example will output:

```text


200000000000000

    
```
