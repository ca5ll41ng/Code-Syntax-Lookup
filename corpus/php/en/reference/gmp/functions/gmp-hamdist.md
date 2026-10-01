---
id: "en-php-function-function-gmp-hamdist"
language: "php"
lang: "en"
category: "function"
name: "gmp_hamdist"
title: "Hamming distance"
signature: "int gmp_hamdist(GMP|int|string $num1, GMP|int|string $num2)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-hamdist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Hamming distance

## Description

```php
int gmp_hamdist(GMP|int|string $num1, GMP|int|string $num2)
```

Returns the hamming distance between `$num1` and `$num2`. Both operands should be non-negative.

## Parameters

- **`$num1`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0). — It should be positive.
- **`$num2`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0). — It should be positive.

## Return Values

The hamming distance between `$num1` and `$num2`, as an `int`.

## Examples

**`gmp_hamdist()` example**

```php


<?php
$ham1 = gmp_init("1001010011", 2);
$ham2 = gmp_init("1011111100", 2);
echo gmp_hamdist($ham1, $ham2) . "\n";

/* hamdist is equivalent to: */
echo gmp_popcount(gmp_xor($ham1, $ham2)) . "\n";
?>

    
```

The above example will output:

```text


6
6

    
```

## See Also

`gmp_popcount()` `gmp_xor()`
