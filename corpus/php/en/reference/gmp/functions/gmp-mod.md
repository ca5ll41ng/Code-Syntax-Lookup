---
id: "en-php-function-function-gmp-mod"
language: "php"
lang: "en"
category: "function"
name: "gmp_mod"
title: "Modulo operation"
signature: "GMP gmp_mod(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-mod.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Modulo operation

## Description

```php
GMP gmp_mod(GMP|int|string $num1, GMP|int|string $num2)
```

Calculates `$num1` modulo `$num2`. The result is always non-negative, the sign of `$num2` is ignored.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — The modulo that is being evaluated. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_mod()` example**

```php


<?php
$mod = gmp_mod("8", "3");
echo gmp_strval($mod) . "\n";
?>

    
```

The above example will output:

```text


2

    
```
