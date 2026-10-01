---
id: "en-php-function-function-stats-dens-uniform"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_uniform"
title: "Probability density function of the uniform distribution"
signature: "float stats_dens_uniform(float $x, float $a, float $b)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-uniform.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the uniform distribution

## Description

```php
float stats_dens_uniform(float $x, float $a, float $b)
```

Returns the probability density at `$x`, where the random variable follows the uniform distribution of which the lower bound is `$a` and the upper bound is `$b`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$a`** — The lower bound of the distribution
- **`$b`** — The upper bound of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
