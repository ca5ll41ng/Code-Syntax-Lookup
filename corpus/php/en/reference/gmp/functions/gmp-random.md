---
id: "en-php-function-function-gmp-random"
language: "php"
lang: "en"
category: "function"
name: "gmp_random"
title: "Random number"
signature: "GMP gmp_random(int $limiter = 20)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-random.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Random number

## Description

```php
GMP gmp_random(int $limiter = 20)
```

Generate a random number. The number will be between 0 and (2 ** n) - 1, where n is the number of bits per limb multiplied by `$limiter`. If `$limiter` is negative, negative numbers are generated.

A limb is an internal GMP mechanism. The number of bits in a limb is not static, and can vary from system to system. Generally, the number of bits in a limb is either 32 or 64, but this is not guaranteed.

> This function does not generate cryptographically secure values, and *must not* be used for cryptographic purposes, or purposes that require returned values to be unguessable.
>
> If cryptographically secure randomness is required, the `Random\Randomizer` may be used with the `Random\Engine\Secure` engine. For simple use cases, the `random_int()` and `random_bytes()` functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

## Parameters

- **`$limiter`** — The limiter. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

A random GMP number.

## Examples

**`gmp_random()` example**

```php


<?php
$rand1 = gmp_random(1); // random number from 0 to 1 * bits per limb
$rand2 = gmp_random(2); // random number from 0 to 2 * bits per limb

echo gmp_strval($rand1) . "\n";
echo gmp_strval($rand2) . "\n";
?>

    
```

The above example will output:

```text


1915834968
8642564075890328087

    
```
