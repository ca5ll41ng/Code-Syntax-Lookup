---
id: "en-php-function-function-gmp-scan1"
language: "php"
lang: "en"
category: "function"
name: "gmp_scan1"
title: "Scan for 1"
signature: "int gmp_scan1(GMP|int|string $num1, int $start)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-scan1.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scan for 1

## Description

```php
int gmp_scan1(GMP|int|string $num1, int $start)
```

Scans `$num1`, starting with bit `$start`, towards more significant bits, until the first set bit is found.

## Parameters

- **`$num1`** — The number to scan. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$start`** — The starting bit.

## Return Values

Returns the index of the found bit, as an `int`. If no set bit is found, -1 is returned.

## Examples

**`gmp_scan1()` example**

```php


<?php
// "1" bit is found at position 3. index starts at 0
$s1 = gmp_init("01000", 2);
echo gmp_scan1($s1, 0) . "\n";

// "1" bit is found at position 9. index starts at 5
$s2 = gmp_init("01000001111", 2);
echo gmp_scan1($s2, 5) . "\n";
?>

    
```

The above example will output:

```text


3
9

    
```
