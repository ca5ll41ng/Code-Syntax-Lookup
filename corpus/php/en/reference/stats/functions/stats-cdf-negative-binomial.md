---
id: "en-php-function-function-stats-cdf-negative-binomial"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_negative_binomial"
title: "Calculates any one parameter of the negative binomial distribution given values for the others"
signature: "float stats_cdf_negative_binomial(float $par1, float $par2, float $par3, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-negative-binomial.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the negative binomial distribution given values for the others

## Description

```php
float stats_cdf_negative_binomial(float $par1, float $par2, float $par3, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the negative binomial distribution. The kind of the return value and parameters (`$par1`, `$par2`, and `$par3`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, r, and p denotes cumulative distribution function, the number of failure, the number of success, and the success rate for each trial, respectively.

| `$which` | Return value | `$par1` | `$par2` | `$par3` |
| --- | --- | --- | --- | --- |
| 1 | CDF | x | r | p |
| 2 | x | CDF | r | p |
| 3 | r | x | CDF | p |
| 4 | p | x | CDF | r |

## Parameters

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$par3`** — The third parameter
- **`$which`** — The flag to determine what to be calculated

## Return Values

Returns CDF, x, r, or p, determined by `$which`.
