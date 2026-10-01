---
id: "en-php-function-function-stats-dens-weibull"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_weibull"
title: "Probability density function of the Weibull distribution"
signature: "float stats_dens_weibull(float $x, float $a, float $b)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-weibull.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the Weibull distribution

## Description

```php
float stats_dens_weibull(float $x, float $a, float $b)
```

Returns the probability density at `$x`, where the random variable follows the Weibull distribution of which the shape parameter is `$a` and the scale parameter is `$b`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$a`** — The shape parameter of the distribution
- **`$b`** — The scale parameter of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
