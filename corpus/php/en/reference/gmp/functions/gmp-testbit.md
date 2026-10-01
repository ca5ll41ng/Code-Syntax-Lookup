---
id: "en-php-function-function-gmp-testbit"
language: "php"
lang: "en"
category: "function"
name: "gmp_testbit"
title: "Tests if a bit is set"
signature: "bool gmp_testbit(GMP|int|string $num, int $index)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-testbit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Tests if a bit is set

## Description

```php
bool gmp_testbit(GMP|int|string $num, int $index)
```

Tests if the specified bit is set.

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$index`** — The bit to test

## Return Values

Returns `true` if the bit is set in `$num`, otherwise `false`.

## Errors/Exceptions

An `E_WARNING` level error is issued when `$index` is less than zero, and `false` is returned.

## Examples

**`gmp_testbit()` example**

```php


<?php
$n = gmp_init("1000000");
var_dump(gmp_testbit($n, 1));
gmp_setbit($n, 1);
var_dump(gmp_testbit($n, 1));
?>

    
```

The above example will output:

```text


bool(false)
bool(true)

    
```

## See Also

`gmp_setbit()` `gmp_clrbit()`
