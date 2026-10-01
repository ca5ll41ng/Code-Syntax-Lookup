---
id: "en-php-function-function-gmp-random-seed"
language: "php"
lang: "en"
category: "function"
name: "gmp_random_seed"
title: "Sets the RNG seed"
signature: "void gmp_random_seed(GMP|int|string $seed)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-random-seed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the RNG seed

## Description

```php
void gmp_random_seed(GMP|int|string $seed)
```

## Parameters

- **`$seed`** — The seed to be set for the `gmp_random()`, `gmp_random_bits()`, and `gmp_random_range()` functions. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

No value is returned.

## Errors/Exceptions

Throws a `ValueError` if `$seed` is invalid.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | If `$seed` is invalid, `gmp_random_seed()` now throws a `ValueError`. Previously it emitted an `E_WARNING` and returned `false`. |

## Examples

**`gmp_random_seed()` example**

```php


<?php
// set the seed
gmp_random_seed(100);

var_dump(gmp_strval(gmp_random(1)));

// set the seed to something else
gmp_random_seed(gmp_init(-100));

var_dump(gmp_strval(gmp_random_bits(10)));

// set the seed to something invalid
var_dump(gmp_random_seed('not a number'));

    
```

The above example will output:

```text


string(20) "15370156633245019617"
string(3) "683"

Warning: gmp_random_seed(): Unable to convert variable to GMP - string is not an integer in %s on line %d
bool(false)

    
```

## See Also

 `gmp_init()` `gmp_random()` `gmp_random_bits()` `gmp_random_range()`
