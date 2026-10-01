---
id: "en-php-function-function-stats-dens-laplace"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_laplace"
title: "Probability density function of the Laplace distribution"
signature: "float stats_dens_laplace(float $x, float $ave, float $stdev)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-laplace.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the Laplace distribution

## Description

```php
float stats_dens_laplace(float $x, float $ave, float $stdev)
```

Returns the probability density at `$x`, where the random variable follows the Laplace distribution of which the location parameter is `$ave` and the scale parameter is `$stdev`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$ave`** — The location parameter of the distribution
- **`$stdev`** — The shape parameter of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
