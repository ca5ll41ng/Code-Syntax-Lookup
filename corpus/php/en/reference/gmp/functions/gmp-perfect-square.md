---
id: "en-php-function-function-gmp-perfect-square"
language: "php"
lang: "en"
category: "function"
name: "gmp_perfect_square"
title: "Perfect square check"
signature: "bool gmp_perfect_square(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-perfect-square.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Perfect square check

## Description

```php
bool gmp_perfect_square(GMP|int|string $num)
```

Check if a number is a perfect square.

## Parameters

- **`$num`** — The number being checked as a perfect square. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns `true` if `$num` is a perfect square, `false` otherwise.

## Examples

**`gmp_perfect_square()` example**

```php


<?php
// 3 * 3, perfect square
var_dump(gmp_perfect_square("9"));

// not a perfect square
var_dump(gmp_perfect_square("7"));

// 1234567890 * 1234567890, perfect square
var_dump(gmp_perfect_square("1524157875019052100"));
?>

    
```

The above example will output:

```text


bool(true)
bool(false)
bool(true)

    
```

## See Also

`gmp_perfect_power()` `gmp_sqrt()` `gmp_sqrtrem()`
