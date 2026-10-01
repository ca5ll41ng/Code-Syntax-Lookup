---
id: "en-php-function-function-gmp-prob-prime"
language: "php"
lang: "en"
category: "function"
name: "gmp_prob_prime"
title: "Check if number is \"probably prime\""
signature: "int gmp_prob_prime(GMP|int|string $num, int $repetitions = 10)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-prob-prime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Check if number is "probably prime"

## Description

```php
int gmp_prob_prime(GMP|int|string $num, int $repetitions = 10)
```

The function uses Miller-Rabin's probabilistic test to check if a number is a prime.

## Parameters

- **`$num`** — The number being checked as a prime. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$repetitions`** — Reasonable values of `$repetitions` vary from 5 to 10 (default being 10); a higher value lowers the probability for a non-prime to pass as a "probable" prime. — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

If this function returns 0, `$num` is definitely not prime. If it returns 1, then `$num` is "probably" prime. If it returns 2, then `$num` is surely prime.

## Examples

**`gmp_prob_prime()` example**

```php


<?php
// definitely not a prime
echo gmp_prob_prime("6") . "\n";

// probably a prime
echo gmp_prob_prime("1111111111111111111") . "\n";

// definitely a prime
echo gmp_prob_prime("11") . "\n";
?>

    
```

The above example will output:

```text


0
1
2

    
```
