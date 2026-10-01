---
id: "en-php-function-function-gmp-nextprime"
language: "php"
lang: "en"
category: "function"
name: "gmp_nextprime"
title: "Find next prime number"
signature: "GMP gmp_nextprime(GMP|int|string $num)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-nextprime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Find next prime number

## Description

```php
GMP gmp_nextprime(GMP|int|string $num)
```

Find next prime number

## Parameters

- **`$num`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).

## Return Values

Return the next prime number greater than `$num`, as a GMP number.

## Examples

**`gmp_nextprime()` example**

```php


<?php
$prime1 = gmp_nextprime(10); // next prime number greater than 10
$prime2 = gmp_nextprime(-1000); // next prime number greater than -1000

echo gmp_strval($prime1) . "\n";
echo gmp_strval($prime2) . "\n";
?>

    
```

The above example will output:

```text


11
2

    
```

## Notes

> This function uses a probabilistic algorithm to identify primes and chances to get a composite number are extremely small.
