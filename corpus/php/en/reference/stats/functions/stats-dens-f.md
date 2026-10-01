---
id: "en-php-function-function-stats-dens-f"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_f"
title: "Probability density function of the F distribution"
signature: "float stats_dens_f(float $x, float $dfr1, float $dfr2)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-f.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the F distribution

## Description

```php
float stats_dens_f(float $x, float $dfr1, float $dfr2)
```

Returns the probability density at `$x`, where the random variable follows the F distribution of which the degree of freedoms are `$dfr1` and `$dfr2`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$dfr1`** — The degree of freedom of the distribution
- **`$dfr2`** — The degree of freedom of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
