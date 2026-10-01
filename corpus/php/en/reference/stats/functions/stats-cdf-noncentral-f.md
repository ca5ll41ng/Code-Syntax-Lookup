---
id: "en-php-function-function-stats-cdf-noncentral-f"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_noncentral_f"
title: "Calculates any one parameter of the non-central F distribution given values for the others"
signature: "float stats_cdf_noncentral_f(float $par1, float $par2, float $par3, float $par4, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-noncentral-f.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the non-central F distribution given values for the others

## Description

```php
float stats_cdf_noncentral_f(float $par1, float $par2, float $par3, float $par4, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the non-central F distribution. The kind of the return value and parameters (`$par1`, `$par2`, `$par3`, and `$par4`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, nu1, nu2, and lambda denotes cumulative distribution function, the value of the random variable, the degree of freedoms and the non-centrality parameter of the distribution, respectively.

| `$which` | Return value | `$par1` | `$par2` | `$par3` | `$par4` |
| --- | --- | --- | --- | --- | --- |
| 1 | CDF | x | nu1 | nu2 | lambda |
| 2 | x | CDF | nu1 | nu2 | lambda |
| 3 | nu1 | x | CDF | nu2 | lambda |
| 4 | nu2 | x | CDF | nu1 | lambda |
| 5 | lambda | x | CDF | nu1 | nu2 |

## Parameters

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$par3`** — The third parameter
- **`$par4`** — The fourth parameter
- **`$which`** — The flag to determine what to be calculated

## Return Values

Returns CDF, x, nu1, nu2, or lambda, determined by `$which`.
