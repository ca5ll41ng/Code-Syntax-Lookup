---
id: "en-php-function-function-gmp-sub"
language: "php"
lang: "en"
category: "function"
name: "gmp_sub"
title: "Subtract numbers"
signature: "GMP gmp_sub(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-sub.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Subtract numbers

## Description

```php
GMP gmp_sub(GMP|int|string $num1, GMP|int|string $num2)
```

Subtracts `$num2` from `$num1` and returns the result.

## Parameters

- **`$num1`** — The number being subtracted from. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — The number subtracted from `$num1`. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_sub()` example**

```php


<?php
$sub = gmp_sub("281474976710656", "4294967296"); // 2^48 - 2^32
echo gmp_strval($sub) . "\n";
?>

    
```

The above example will output:

```text


281470681743360

    
```
