---
id: "en-php-function-function-stats-dens-exponential"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_exponential"
title: "Probability density function of the exponential distribution"
signature: "float stats_dens_exponential(float $x, float $scale)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-exponential.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the exponential distribution

## Description

```php
float stats_dens_exponential(float $x, float $scale)
```

Returns the probability density at `$x`, where the random variable follows the exponential distribution of which the scale is `$scale`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$scale`** — The scale of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
