---
id: "en-php-function-function-trader-mavp"
language: "php"
lang: "en"
category: "function"
name: "trader_mavp"
title: "Moving average with variable period"
signature: "array trader_mavp(array $real, array $periods, [int $minPeriod = ...], [int $maxPeriod = ...], [int $mAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-mavp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moving average with variable period

## Description

```php
array trader_mavp(array $real, array $periods, [int $minPeriod = ...], [int $maxPeriod = ...], [int $mAType = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$periods`** — Array of real values.
- **`$minPeriod`** — Value less than minimum will be changed to Minimum period. Valid range from 2 to 100000
- **`$maxPeriod`** — Value higher than minimum will be changed to Maximum period. Valid range from 2 to 100000
- **`$mAType`** — Type of Moving Average. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
