---
id: "en-php-function-function-gmp-random-range"
language: "php"
lang: "en"
category: "function"
name: "gmp_random_range"
title: "Get a uniformly selected integer"
signature: "GMP gmp_random_range(GMP|int|string $min, GMP|int|string $max)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-random-range.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a uniformly selected integer

## Description

```php
GMP gmp_random_range(GMP|int|string $min, GMP|int|string $max)
```

Generate a random number. The number will be between `$min` and `$max`.

`$min` and `$max` can both be negative, but `$min` must always be less than `$max`.

> This function does not generate cryptographically secure values, and *must not* be used for cryptographic purposes, or purposes that require returned values to be unguessable.
>
> If cryptographically secure randomness is required, the `Random\Randomizer` may be used with the `Random\Engine\Secure` engine. For simple use cases, the `random_int()` and `random_bytes()` functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

## Parameters

- **`$min`** — A GMP number representing the lower bound for the random number
- **`$max`** — A GMP number representing the upper bound for the random number

## Return Values

Returns a `GMP` object which contains a uniformly selected integer from the closed interval [`$min`, `$max`]. Both `$min` and `$max` are possible return values.

## Errors/Exceptions

If `$max` is less than `$min`, a ValueError will be thrown.

## Examples

**`gmp_random_range()` example**

```php

     
<?php
$rand1 = gmp_random_range(0, 100);    // random number between 0 and 100
$rand2 = gmp_random_range(-100, -10); // random number between -100 and -10

echo gmp_strval($rand1) . "\n";
echo gmp_strval($rand2) . "\n";
?>

    
```

The above example will output:

```text


42
-67

    
```
