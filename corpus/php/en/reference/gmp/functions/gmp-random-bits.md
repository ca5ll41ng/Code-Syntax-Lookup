---
id: "en-php-function-function-gmp-random-bits"
language: "php"
lang: "en"
category: "function"
name: "gmp_random_bits"
title: "Random number"
signature: "GMP gmp_random_bits(int $bits)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-random-bits.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Random number

## Description

```php
GMP gmp_random_bits(int $bits)
```

Generate a random number. The number will be between `0` and `2$bits - 1`.

`$bits` must be greater than 0, and the maximum value is restricted by available memory.

> This function does not generate cryptographically secure values, and *must not* be used for cryptographic purposes, or purposes that require returned values to be unguessable.
>
> If cryptographically secure randomness is required, the `Random\Randomizer` may be used with the `Random\Engine\Secure` engine. For simple use cases, the `random_int()` and `random_bytes()` functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

## Parameters

- **`$bits`** — The number of bits to generate.

## Return Values

A random GMP number.

## Errors/Exceptions

If `$bits` is less than `1`, a ValueError will be thrown.

## Examples

**`gmp_random_bits()` example**

```php


<?php
$rand1 = gmp_random_bits(3); // random number from 0 to 7
$rand2 = gmp_random_bits(5); // random number from 0 to 31

echo gmp_strval($rand1) . "\n";
echo gmp_strval($rand2) . "\n";
?>

    
```

The above example will output:

```text


3
15

    
```
