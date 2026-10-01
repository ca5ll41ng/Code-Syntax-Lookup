---
id: "en-php-function-function-trader-bbands"
language: "php"
lang: "en"
category: "function"
name: "trader_bbands"
title: "Bollinger Bands"
signature: "array trader_bbands(array $real, [int $timePeriod = ...], [float $nbDevUp = ...], [float $nbDevDn = ...], [int $mAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-bbands.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Bollinger Bands

## Description

```php
array trader_bbands(array $real, [int $timePeriod = ...], [float $nbDevUp = ...], [float $nbDevDn = ...], [int $mAType = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.
- **`$nbDevUp`** — Deviation multiplier for upper band. Valid range from TRADER_REAL_MIN to TRADER_REAL_MAX.
- **`$nbDevDn`** — Deviation multiplier for lower band. Valid range from TRADER_REAL_MIN to TRADER_REAL_MAX.
- **`$mAType`** — Type of Moving Average. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
