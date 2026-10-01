---
id: "en-php-function-function-gmp-sqrt"
language: "php"
lang: "en"
category: "function"
name: "gmp_sqrt"
title: "Calculate square root"
signature: "GMP gmp_sqrt(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-sqrt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculate square root

## Description

```php
GMP gmp_sqrt(GMP|int|string $num)
```

Calculates square root of `$num`.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

The integer portion of the square root, as a GMP number.

## Examples

**`gmp_sqrt()` example**

```php


<?php
$sqrt1 = gmp_sqrt("9");
$sqrt2 = gmp_sqrt("7");
$sqrt3 = gmp_sqrt("1524157875019052100");

echo gmp_strval($sqrt1) . "\n";
echo gmp_strval($sqrt2) . "\n";
echo gmp_strval($sqrt3) . "\n";
?>

    
```

The above example will output:

```text


3
2
1234567890

    
```
