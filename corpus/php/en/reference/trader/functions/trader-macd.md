---
id: "en-php-function-function-trader-macd"
language: "php"
lang: "en"
category: "function"
name: "trader_macd"
title: "Moving Average Convergence/Divergence"
signature: "array trader_macd(array $real, [int $fastPeriod = ...], [int $slowPeriod = ...], [int $signalPeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-macd.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moving Average Convergence/Divergence

## Description

```php
array trader_macd(array $real, [int $fastPeriod = ...], [int $slowPeriod = ...], [int $signalPeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$fastPeriod`** — Number of period for the fast MA. Valid range from 2 to 100000.
- **`$slowPeriod`** — Number of period for the slow MA. Valid range from 2 to 100000.
- **`$signalPeriod`** — Smoothing for the signal line (nb of period). Valid range from 1 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
