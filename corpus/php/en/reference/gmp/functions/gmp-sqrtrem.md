---
id: "en-php-function-function-gmp-sqrtrem"
language: "php"
lang: "en"
category: "function"
name: "gmp_sqrtrem"
title: "Square root with remainder"
signature: "array gmp_sqrtrem(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-sqrtrem.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Square root with remainder

## Description

```php
array gmp_sqrtrem(GMP|int|string $num)
```

Calculate the square root of a number, with remainder.

## Parameters

- **`$num`** — The number being square rooted. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Returns array where first element is the integer square root of `$num` and the second is the remainder (i.e., the difference between `$num` and the first element squared).

## Examples

**`gmp_sqrtrem()` example**

```php


<?php
list($sqrt1, $sqrt1rem) = gmp_sqrtrem("9");
list($sqrt2, $sqrt2rem) = gmp_sqrtrem("7");
list($sqrt3, $sqrt3rem) = gmp_sqrtrem("1048576");

echo gmp_strval($sqrt1) . ", " . gmp_strval($sqrt1rem) . "\n";
echo gmp_strval($sqrt2) . ", " . gmp_strval($sqrt2rem) . "\n";
echo gmp_strval($sqrt3) . ", " . gmp_strval($sqrt3rem) . "\n";
?>

    
```

The above example will output:

```text


3, 0
2, 3
1024, 0

    
```
