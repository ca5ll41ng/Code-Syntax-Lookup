---
id: "en-php-function-function-stats-dens-pmf-poisson"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_pmf_poisson"
title: "Probability mass function of the Poisson distribution"
signature: "float stats_dens_pmf_poisson(float $x, float $lb)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-pmf-poisson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability mass function of the Poisson distribution

## Description

```php
float stats_dens_pmf_poisson(float $x, float $lb)
```

Returns the probability mass at `$x`, where the random variable follows the Poisson distribution whose parameter is `$lb`.

## Parameters

- **`$x`** — The value at which the probability mass is calculated
- **`$lb`** — The parameter of the Poisson distribution

## Return Values

The probability mass at `$x` or `false` for failure.
