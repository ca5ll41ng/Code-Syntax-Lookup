---
id: "en-php-function-function-stats-dens-pmf-negative-binomial"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_pmf_negative_binomial"
title: "Probability mass function of the negative binomial distribution"
signature: "float stats_dens_pmf_negative_binomial(float $x, float $n, float $pi)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-pmf-negative-binomial.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability mass function of the negative binomial distribution

## Description

```php
float stats_dens_pmf_negative_binomial(float $x, float $n, float $pi)
```

Returns the probability mass at `$x`, where the random variable follows the negative binomial distribution of which the number of the success is `$n` and the success rate is `$pi`.

## Parameters

- **`$x`** — The value at which the probability mass is calculated
- **`$n`** — The number of the success of the distribution
- **`$pi`** — The success rate of the distribution

## Return Values

The probability mass at `$x` or `false` for failure.
