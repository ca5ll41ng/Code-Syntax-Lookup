---
id: "en-php-function-function-gmp-cmp"
language: "php"
lang: "en"
category: "function"
name: "gmp_cmp"
title: "Compare numbers"
signature: "int gmp_cmp(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-cmp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Compare numbers

## Description

```php
int gmp_cmp(GMP|int|string $num1, GMP|int|string $num2)
```

Compares two numbers.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns a positive value if `a > b`, zero if `a = b` and a negative value if `a < b`.

## Examples

**`gmp_cmp()` example**

```php


<?php
$cmp1 = gmp_cmp("1234", "1000"); // greater than
$cmp2 = gmp_cmp("1000", "1234"); // less than
$cmp3 = gmp_cmp("1234", "1234"); // equal to

echo "$cmp1 $cmp2 $cmp3\n";
?>

   
```

The above example will output:

```text


1 -1 0

   
```
