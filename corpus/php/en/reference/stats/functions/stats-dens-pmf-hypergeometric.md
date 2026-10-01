---
id: "en-php-function-function-stats-dens-pmf-hypergeometric"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_pmf_hypergeometric"
title: "Probability mass function of the hypergeometric distribution"
signature: "float stats_dens_pmf_hypergeometric(float $n1, float $n2, float $N1, float $N2)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-pmf-hypergeometric.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability mass function of the hypergeometric distribution

## Description

```php
float stats_dens_pmf_hypergeometric(float $n1, float $n2, float $N1, float $N2)
```

Returns the probability mass at `$n1`, where the random variable follows the hypergeometric distribution of which the number of failure is `$n2`, the number of success samples is `$N1`, and the number of failure samples is `$N2`.

## Parameters

- **`$n1`** — The number of success, at which the probability mass is calculated
- **`$n2`** — The number of failure of the distribution
- **`$N1`** — The number of success samples of the distribution
- **`$N2`** — The number of failure samples of the distribution

## Return Values

The probability mass at `$n1` or `false` for failure.
