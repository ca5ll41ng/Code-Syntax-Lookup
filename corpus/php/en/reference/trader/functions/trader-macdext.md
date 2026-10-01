---
id: "en-php-function-function-trader-macdext"
language: "php"
lang: "en"
category: "function"
name: "trader_macdext"
title: "MACD with controllable MA type"
signature: "array trader_macdext(array $real, [int $fastPeriod = ...], [int $fastMAType = ...], [int $slowPeriod = ...], [int $slowMAType = ...], [int $signalPeriod = ...], [int $signalMAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-macdext.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MACD with controllable MA type

## Description

```php
array trader_macdext(array $real, [int $fastPeriod = ...], [int $fastMAType = ...], [int $slowPeriod = ...], [int $slowMAType = ...], [int $signalPeriod = ...], [int $signalMAType = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$fastPeriod`** — Number of period for the fast MA. Valid range from 2 to 100000.
- **`$fastMAType`** — Type of Moving Average for fast MA. TRADER_MA_TYPE_* series of constants should be used.
- **`$slowPeriod`** — Number of period for the slow MA. Valid range from 2 to 100000.
- **`$slowMAType`** — Type of Moving Average for slow MA. TRADER_MA_TYPE_* series of constants should be used.
- **`$signalPeriod`** — Smoothing for the signal line (nb of period). Valid range from 1 to 100000.
- **`$signalMAType`** — Type of Moving Average for signal line. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
