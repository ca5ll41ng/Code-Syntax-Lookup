---
id: "en-php-function-function-gmp-invert"
language: "php"
lang: "en"
category: "function"
name: "gmp_invert"
title: "Inverse by modulo"
signature: "GMP|false gmp_invert(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-invert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Inverse by modulo

## Description

```php
GMP|false gmp_invert(GMP|int|string $num1, GMP|int|string $num2)
```

Computes the inverse of `$num1` modulo `$num2`.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A GMP number on success or `false` if an inverse does not exist.

## Examples

**`gmp_invert()` example**

```php


<?php
echo gmp_invert("5", "10"); // no inverse, outputs nothing, result is FALSE
$invert = gmp_invert("5", "11");
echo gmp_strval($invert) . "\n";
?>

    
```

The above example will output:

```text


9

    
```
