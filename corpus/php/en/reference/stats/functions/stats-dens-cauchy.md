---
id: "en-php-function-function-stats-dens-cauchy"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_cauchy"
title: "Probability density function of the Cauchy distribution"
signature: "float stats_dens_cauchy(float $x, float $ave, float $stdev)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-cauchy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the Cauchy distribution

## Description

```php
float stats_dens_cauchy(float $x, float $ave, float $stdev)
```

Returns the probability density at `$x`, where the random variable follows the Cauchy distribution whose location and scale are `$ave` and `$stdev`, respectively.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$ave`** — The location parameter of the distribution
- **`$stdev`** — The scale parameter of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
