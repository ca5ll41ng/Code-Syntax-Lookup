---
id: "en-php-function-function-stats-cdf-poisson"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_poisson"
title: "Calculates any one parameter of the Poisson distribution given values for the others"
signature: "float stats_cdf_poisson(float $par1, float $par2, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-poisson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the Poisson distribution given values for the others

## Description

```php
float stats_cdf_poisson(float $par1, float $par2, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the Poisson distribution. The kind of the return value and parameters (`$par1` and `$par2`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, and lambda denotes cumulative distribution function, the value of the random variable, and the parameter of the Poisson distribution, respectively.

| `$which` | Return value | `$par1` | `$par2` |
| --- | --- | --- | --- |
| 1 | CDF | x | lambda |
| 2 | x | CDF | lambda |
| 3 | lambda | x | CDF |

## Parameters

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$which`** — The flag to determine what to be calculated

## Return Values

Returns CDF, x, or lambda, determined by `$which`.
