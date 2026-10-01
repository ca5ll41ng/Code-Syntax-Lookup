---
id: "en-php-function-function-stats-dens-beta"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_beta"
title: "Probability density function of the beta distribution"
signature: "float stats_dens_beta(float $x, float $a, float $b)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-beta.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the beta distribution

## Description

```php
float stats_dens_beta(float $x, float $a, float $b)
```

Returns the probability density at `$x`, where the random variable follows the beta distribution of which the shape parameters are `$a` and `$b`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$a`** — The shape parameter of the distribution
- **`$b`** — The shape parameter of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
