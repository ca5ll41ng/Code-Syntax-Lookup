---
id: "en-php-function-function-gmp-neg"
language: "php"
lang: "en"
category: "function"
name: "gmp_neg"
title: "Negate number"
signature: "GMP gmp_neg(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-neg.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Negate number

## Description

```php
GMP gmp_neg(GMP|int|string $num)
```

Returns the negative value of a number.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns -`$num`, as a GMP number.

## Examples

**`gmp_neg()` example**

```php


<?php
$neg1 = gmp_neg("1");
echo gmp_strval($neg1) . "\n";
$neg2 = gmp_neg("-1");
echo gmp_strval($neg2) . "\n";
?>

    
```

The above example will output:

```text


-1
1

    
```
