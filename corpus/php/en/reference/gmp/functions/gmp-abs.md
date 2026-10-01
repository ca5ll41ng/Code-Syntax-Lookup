---
id: "en-php-function-function-gmp-abs"
language: "php"
lang: "en"
category: "function"
name: "gmp_abs"
title: "Absolute value"
signature: "GMP gmp_abs(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-abs.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Absolute value

## Description

```php
GMP gmp_abs(GMP|int|string $num)
```

Get the absolute value of a number.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns the absolute value of `$num`, as a GMP number.

## Examples

**`gmp_abs()` example**

```php


<?php
$abs1 = gmp_abs("274982683358");
$abs2 = gmp_abs("-274982683358");

echo gmp_strval($abs1) . "\n";
echo gmp_strval($abs2) . "\n";
?>

    
```

The above example will output:

```text


274982683358
274982683358

    
```
