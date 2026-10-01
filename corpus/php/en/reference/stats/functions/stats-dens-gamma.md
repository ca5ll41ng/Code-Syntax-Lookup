---
id: "en-php-function-function-stats-dens-gamma"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_gamma"
title: "Probability density function of the gamma distribution"
signature: "float stats_dens_gamma(float $x, float $shape, float $scale)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-gamma.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the gamma distribution

## Description

```php
float stats_dens_gamma(float $x, float $shape, float $scale)
```

Returns the probability density at `$x`, where the random variable follows the gamma distribution of which the shape parameter is `$shape` and the scale parameter is `$scale`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$shape`** — The shape parameter of the distribution
- **`$scale`** — The scale parameter of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
