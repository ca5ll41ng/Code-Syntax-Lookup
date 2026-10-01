---
id: "en-php-function-function-gmp-com"
language: "php"
lang: "en"
category: "function"
name: "gmp_com"
title: "Calculates one's complement"
signature: "GMP gmp_com(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-com.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates one's complement

## Description

```php
GMP gmp_com(GMP|int|string $num)
```

Returns the one's complement of `$num`.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns the one's complement of `$num`, as a GMP number.

## Examples

**`gmp_com()` example**

```php


<?php
$com = gmp_com("1234");
echo gmp_strval($com) . "\n";
?>

   
```

The above example will output:

```text


-1235

   
```
