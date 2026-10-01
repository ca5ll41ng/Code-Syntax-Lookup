---
id: "en-php-function-function-trader-midprice"
language: "php"
lang: "en"
category: "function"
name: "trader_midprice"
title: "Midpoint Price over period"
signature: "array trader_midprice(array $high, array $low, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-midprice.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Midpoint Price over period

## Description

```php
array trader_midprice(array $high, array $low, [int $timePeriod = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
