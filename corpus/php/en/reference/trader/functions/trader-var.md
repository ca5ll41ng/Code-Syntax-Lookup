---
id: "en-php-function-function-trader-var"
language: "php"
lang: "en"
category: "function"
name: "trader_var"
title: "Variance"
signature: "array trader_var(array $real, [int $timePeriod = ...], [float $nbDev = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-var.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Variance

## Description

```php
array trader_var(array $real, [int $timePeriod = ...], [float $nbDev = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.
- **`$nbDev`**

## Return Values

Returns an array with calculated data or false on failure.
