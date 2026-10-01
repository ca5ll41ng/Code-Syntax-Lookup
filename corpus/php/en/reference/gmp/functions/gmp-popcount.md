---
id: "en-php-function-function-gmp-popcount"
language: "php"
lang: "en"
category: "function"
name: "gmp_popcount"
title: "Population count"
signature: "int gmp_popcount(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-popcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Population count

## Description

```php
int gmp_popcount(GMP|int|string $num)
```

Get the population count.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

The population count of `$num`, as an `int`.

## Examples

**`gmp_popcount()` example**

```php


<?php
$pop1 = gmp_init("10000101", 2); // 3 1's
echo gmp_popcount($pop1) . "\n";
$pop2 = gmp_init("11111110", 2); // 7 1's
echo gmp_popcount($pop2) . "\n";
?>

    
```

The above example will output:

```text


3
7

    
```
