---
id: "en-php-function-function-gmp-strval"
language: "php"
lang: "en"
category: "function"
name: "gmp_strval"
title: "Convert GMP number to string"
signature: "string gmp_strval(GMP|int|string $num, int $base = 10)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-strval.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Convert GMP number to string

## Description

```php
string gmp_strval(GMP|int|string $num, int $base = 10)
```

Convert GMP number to string representation in base `$base`. The default base is 10.

## Parameters

- **`$num`** — The GMP number that will be converted to a string. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$base`** — The base of the returned number. The default base is 10. Allowed values for the base are from 2 to 62 and -2 to -36.

## Return Values

The number, as a `string`.

## Examples

**Converting a GMP number to a string**

```php


<?php
$a = gmp_init("0x41682179fbf5");
printf("Decimal: %s, 36-based: %s", gmp_strval($a), gmp_strval($a,36));
?>

    
```
