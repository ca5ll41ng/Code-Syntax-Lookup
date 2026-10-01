---
id: "en-php-function-function-stats-dens-normal"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_normal"
title: "Probability density function of the normal distribution"
signature: "float stats_dens_normal(float $x, float $ave, float $stdev)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-normal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the normal distribution

## Description

```php
float stats_dens_normal(float $x, float $ave, float $stdev)
```

Returns the probability density at `$x`, where the random variable follows the normal distribution of which the mean is `$ave` and the standard deviation is `$stdev`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$ave`** — The mean of the distribution
- **`$stdev`** — The standard deviation of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
