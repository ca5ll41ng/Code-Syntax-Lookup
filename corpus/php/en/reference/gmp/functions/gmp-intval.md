---
id: "en-php-function-function-gmp-intval"
language: "php"
lang: "en"
category: "function"
name: "gmp_intval"
title: "Convert GMP number to integer"
signature: "int gmp_intval(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-intval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert GMP number to integer

## Description

```php
int gmp_intval(GMP|int|string $num)
```

This function converts GMP number into native PHP `int`s.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

The `int` value of `$num`.

## Examples

**`gmp_intval()` example**

```php


<?php
// displays correct result
echo gmp_intval("2147483647") . "\n";

// displays wrong result, above PHP integer limit
echo gmp_intval("2147483648") . "\n";

// displays correct result
echo gmp_strval("2147483648") . "\n";
?>

    
```

The above example will output:

```text


2147483647
2147483647
2147483648

    
```

## Notes

> This function returns a useful result only if the number actually fits the PHP integer (i.e., signed long type). To simply print the GMP number, use `gmp_strval()`.
