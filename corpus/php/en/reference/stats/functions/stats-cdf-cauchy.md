---
id: "en-php-function-function-stats-cdf-cauchy"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_cauchy"
title: "Calculates any one parameter of the Cauchy distribution given values for the others"
signature: "float stats_cdf_cauchy(float $par1, float $par2, float $par3, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-cauchy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the Cauchy distribution given values for the others

## Description

```php
float stats_cdf_cauchy(float $par1, float $par2, float $par3, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the Cauchy distribution. The kind of the return value and parameters (`$par1`, `$par2`, and `$par3`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, x0, and gamma denotes cumulative distribution function, the value of the random variable, the location and the scale parameter of the Cauchy distribution, respectively.

| `$which` | Return value | `$par1` | `$par2` | `$par3` |
| --- | --- | --- | --- | --- |
| 1 | CDF | x | x0 | gamma |
| 2 | x | CDF | x0 | gamma |
| 3 | x0 | x | CDF | gamma |
| 4 | gamma | x | CDF | x0 |

## Parameters

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$par3`** — The third parameter
- **`$which`** — The flag to determine what to be calculated

## Return Values

Returns CDF, x, x0, or gamma, determined by `$which`.
