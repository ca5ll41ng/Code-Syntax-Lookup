---
id: "en-php-function-function-trader-stochf"
language: "php"
lang: "en"
category: "function"
name: "trader_stochf"
title: "Stochastic Fast"
signature: "array trader_stochf(array $high, array $low, array $close, [int $fastK_Period = ...], [int $fastD_Period = ...], [int $fastD_MAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-stochf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Stochastic Fast

## Description

```php
array trader_stochf(array $high, array $low, array $close, [int $fastK_Period = ...], [int $fastD_Period = ...], [int $fastD_MAType = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$fastK_Period`** — Time period for building the Fast-K line. Valid range from 1 to 100000.
- **`$fastD_Period`** — Smoothing for making the Fast-D line. Valid range from 1 to 100000, usually set to 3.
- **`$fastD_MAType`** — Type of Moving Average for Fast-D. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
