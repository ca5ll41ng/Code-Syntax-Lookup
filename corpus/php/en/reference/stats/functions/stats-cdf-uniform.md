---
id: "en-php-function-function-stats-cdf-uniform"
language: "php"
lang: "en"
category: "function"
name: "stats_cdf_uniform"
title: "Calculates any one parameter of the uniform distribution given values for the others"
signature: "float stats_cdf_uniform(float $par1, float $par2, float $par3, int $which)"
module: "stats"
source_url: "https://www.php.net/manual/en/function.stats-cdf-uniform.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Calculates any one parameter of the uniform distribution given values for the others

## Description

```php
float stats_cdf_uniform(float $par1, float $par2, float $par3, int $which)
```

Returns the cumulative distribution function, its inverse, or one of its parameters, of the uniform distribution. The kind of the return value and parameters (`$par1`, `$par2`, and `$par3`) are determined by `$which`.

The following table lists the return value and parameters by `$which`. CDF, x, a, and b denotes cumulative distribution function, the value of the random variable, the lower bound and the higher bound of the uniform distribution, respectively.

| `$which` | Return value | `$par1` | `$par2` | `$par3` |
| --- | --- | --- | --- | --- |
| 1 | CDF | x | a | b |
| 2 | x | CDF | a | b |
| 3 | a | x | CDF | b |
| 4 | b | x | CDF | a |

## Parameters

- **`$par1`** — The first parameter
- **`$par2`** — The second parameter
- **`$par3`** — The third parameter
- **`$which`** — The flag to determine what to be calculated

## Return Values

Returns CDF, x, a, or b, determined by `$which`.
