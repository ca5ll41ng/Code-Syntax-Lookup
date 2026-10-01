---
id: "en-php-function-function-stats-cdf-noncentral-t"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_noncentral_t"
title: "Calculates any one parameter of the non-central t-distribution give values for the others"
signature: "float stats_cdf_noncentral_t(float $par1, float $par2, float $par3, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-noncentral-t.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the non-central t-distribution give values for the others

## Description

 {{{ 

```php
float stats_cdf_noncentral_t(float $par1, float $par2, float $par3, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the non-central t-distribution. The kind of the return value and parameters (`$par1`, `$par2`, and `$par3`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, nu, and mu denotes cumulative distribution function, the value of the random variable, the degrees of freedom and the non-centrality parameter of the distribution, respectively.

| `$which` | Return value | `$par1` | `$par2` | `$par3` |
| --- | --- | --- | --- | --- |
| 1 | CDF | x | nu | mu |
| 2 | x | CDF | nu | mu |
| 3 | nu | x | CDF | mu |
| 4 | mu | x | CDF | nu |

 }}} 

## Parameters

 {{{ 

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$par3`** — The third parameter
- **`$which`** — The flag to determine what to be calculated

 }}} 

## Return Values

 {{{ 

Returns CDF, x, nu, or mu, determined by `$which`.

 }}}
