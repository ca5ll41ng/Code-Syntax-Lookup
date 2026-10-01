---
id: "en-php-function-function-stats-standard-deviation"
language: "php"
lang: "en"
category: "function"
name: "stats_standard_deviation"
title: "Returns the standard deviation"
signature: "float stats_standard_deviation(array $a, bool $sample = false)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-standard-deviation.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the standard deviation

## Description

```php
float stats_standard_deviation(array $a, bool $sample = false)
```

Returns the standard deviation of the values in `$a`.

## Parameters

- **`$a`** — The array of data to find the standard deviation for. Note that all values of the array will be cast to `float`.
- **`$sample`** — Indicates if `$a` represents a sample of the population; defaults to `false`.

## Return Values

Returns the standard deviation on success; `false` on failure.

## Errors/Exceptions

 {{{ 

Raises an `E_WARNING` when there are fewer than 2 values in `$a`.

 }}}
