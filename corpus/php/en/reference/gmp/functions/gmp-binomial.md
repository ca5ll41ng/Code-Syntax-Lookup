---
id: "en-php-function-function-gmp-binomial"
language: "php"
lang: "en"
category: "function"
name: "gmp_binomial"
title: "Calculates binomial coefficient"
signature: "GMP gmp_binomial(GMP|int|string $n, int $k)"
module: "gmp"
source_url: "https://www.php.net/manual/en/function.gmp-binomial.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates binomial coefficient

## Description

```php
GMP gmp_binomial(GMP|int|string $n, int $k)
```

Calculates the binomial coefficient C(n, k).

## Parameters

- **`$n`** — A `GMP` object, an `integer`, or a `string` that can be interpreted as a number following the same logic as if the string was used in `gmp_init()` with automatic base detection (i.e. when `$base` is equal to 0).
- **`$k`**

## Return Values

Returns the binomial coefficient C(n, k).

## Errors/Exceptions

Throws `ValueError` if `$k` is negative. Prior to PHP 8.0.0, `E_WARNING` was issued instead.

## Changelog

|  |  |
| --- | --- |
| 8.0.0 | This function no longer returns `false` on failure. |
