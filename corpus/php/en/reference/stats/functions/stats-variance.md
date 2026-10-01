---
id: "en-php-function-function-stats-variance"
language: "php"
lang: "en"
category: "function"
name: "stats_variance"
title: "Returns the variance"
signature: "float stats_variance(array $a, bool $sample = false)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-variance.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the variance

## Description

```php
float stats_variance(array $a, bool $sample = false)
```

Returns the variance of the values in `$a`.

## Parameters

- **`$a`** — The array of data to find the standard deviation for. Note that all values of the array will be cast to `float`.
- **`$sample`** — Indicates if `$a` represents a sample of the population; defaults to `false`.

## Return Values

Returns the variance on success; `false` on failure.
