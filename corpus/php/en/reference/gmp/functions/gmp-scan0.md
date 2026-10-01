---
id: "en-php-function-function-gmp-scan0"
language: "php"
lang: "en"
category: "function"
name: "gmp_scan0"
title: "Scan for 0"
signature: "int gmp_scan0(GMP|int|string $num1, int $start)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-scan0.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Scan for 0

## Description

```php
int gmp_scan0(GMP|int|string $num1, int $start)
```

Scans `$num1`, starting with bit `$start`, towards more significant bits, until the first clear bit is found.

## Parameters

- **`$num1`** — The number to scan. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$start`** — The starting bit.

## Return Values

Returns the index of the found bit, as an `int`. The index starts from 0.

## Examples

**`gmp_scan0()` example**

```php


<?php
// "0" bit is found at position 3. index starts at 0
$s1 = gmp_init("10111", 2);
echo gmp_scan0($s1, 0) . "\n";

// "0" bit is found at position 7. index starts at 5
$s2 = gmp_init("101110000", 2);
echo gmp_scan0($s2, 5) . "\n";
?>

    
```

The above example will output:

```text


3
7

    
```
