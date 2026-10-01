---
id: "en-php-function-function-trader-stoch"
language: "php"
lang: "en"
category: "function"
name: "trader_stoch"
title: "Stochastic"
signature: "array trader_stoch(array $high, array $low, array $close, [int $fastK_Period = ...], [int $slowK_Period = ...], [int $slowK_MAType = ...], [int $slowD_Period = ...], [int $slowD_MAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-stoch.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stochastic

## Description

```php
array trader_stoch(array $high, array $low, array $close, [int $fastK_Period = ...], [int $slowK_Period = ...], [int $slowK_MAType = ...], [int $slowD_Period = ...], [int $slowD_MAType = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$fastK_Period`** — Time period for building the Fast-K line. Valid range from 1 to 100000.
- **`$slowK_Period`** — Smoothing for making the Slow-K line. Valid range from 1 to 100000, usually set to 3.
- **`$slowK_MAType`** — Type of Moving Average for Slow-K. TRADER_MA_TYPE_* series of constants should be used.
- **`$slowD_Period`** — Smoothing for making the Slow-D line. Valid range from 1 to 100000.
- **`$slowD_MAType`** — Type of Moving Average for Slow-D. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
