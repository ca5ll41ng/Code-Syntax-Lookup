---
id: "en-php-function-function-stats-cdf-logistic"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_logistic"
title: "Calculates any one parameter of the logistic distribution given values for the others"
signature: "float stats_cdf_logistic(float $par1, float $par2, float $par3, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-logistic.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the logistic distribution given values for the others

## Description

```php
float stats_cdf_logistic(float $par1, float $par2, float $par3, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the logistic distribution. The kind of the return value and parameters (`$par1`, `$par2`, and `$par3`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, mu, and s denotes cumulative distribution function, the value of the random variable, and the location and the scale parameter of the logistic distribution, respectively.

| `$which` | Return value | `$par1` | `$par2` | `$par3` |
| --- | --- | --- | --- | --- |
| 1 | CDF | x | mu | s |
| 2 | x | CDF | mu | s |
| 3 | mu | x | CDF | s |
| 4 | s | x | CDF | mu |

## Parameters

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$par3`** — The third parameter
- **`$which`** — The flag to determine what to be calculated

## Return Values

Returns CDF, x, mu, or s, determined by `$which`.
