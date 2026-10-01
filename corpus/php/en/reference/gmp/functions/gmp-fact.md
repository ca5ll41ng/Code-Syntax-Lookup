---
id: "en-php-function-function-gmp-fact"
language: "php"
lang: "en"
category: "function"
name: "gmp_fact"
title: "Factorial"
signature: "GMP gmp_fact(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-fact.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Factorial

## Description

```php
GMP gmp_fact(GMP|int|string $num)
```

Calculates factorial (`num!`) of `$num`.

## Parameters

- **`$num`** — The factorial number. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A `GMP` object.

## Examples

**`gmp_fact()` example**

```php


<?php
$fact1 = gmp_fact(5); // 5 * 4 * 3 * 2 * 1
echo gmp_strval($fact1) . "\n";

$fact2 = gmp_fact(50); // 50 * 49 * 48, ... etc
echo gmp_strval($fact2) . "\n";
?>

    
```

The above example will output:

```text


120
30414093201713378043612608166064768844377641568960512000000000000

    
```
