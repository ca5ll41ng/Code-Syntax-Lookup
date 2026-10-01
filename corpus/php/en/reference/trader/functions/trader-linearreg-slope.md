---
id: "en-php-function-function-trader-linearreg-slope"
language: "php"
lang: "en"
category: "function"
name: "trader_linearreg_slope"
title: "Linear Regression Slope"
signature: "array trader_linearreg_slope(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-linearreg-slope.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Linear Regression Slope

## Description

```php
array trader_linearreg_slope(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
