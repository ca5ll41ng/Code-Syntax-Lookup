---
id: "en-php-function-function-stats-dens-chisquare"
language: "php"
lang: "en"
category: "function"
name: "stats_dens_chisquare"
title: "Probability density function of the chi-square distribution"
signature: "float stats_dens_chisquare(float $x, float $dfr)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-dens-chisquare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Probability density function of the chi-square distribution

## Description

```php
float stats_dens_chisquare(float $x, float $dfr)
```

Returns the probability density at `$x`, where the random variable follows the chi-square distribution of which the degree of freedom is `$dfr`.

## Parameters

- **`$x`** — The value at which the probability density is calculated
- **`$dfr`** — The degree of freedom of the distribution

## Return Values

The probability density at `$x` or `false` for failure.
