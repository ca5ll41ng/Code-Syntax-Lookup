---
id: "en-php-function-function-trader-apo"
language: "php"
lang: "en"
category: "function"
name: "trader_apo"
title: "Absolute Price Oscillator"
signature: "array trader_apo(array $real, [int $fastPeriod = ...], [int $slowPeriod = ...], [int $mAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-apo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Absolute Price Oscillator

## Description

```php
array trader_apo(array $real, [int $fastPeriod = ...], [int $slowPeriod = ...], [int $mAType = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$fastPeriod`** — Number of period for the fast MA. Valid range from 2 to 100000.
- **`$slowPeriod`** — Number of period for the slow MA. Valid range from 2 to 100000.
- **`$mAType`** — Type of Moving Average. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
