---
id: "en-php-function-function-trader-ma"
language: "php"
lang: "en"
category: "function"
name: "trader_ma"
title: "Moving average"
signature: "array trader_ma(array $real, [int $timePeriod = ...], [int $mAType = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-ma.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moving average

## Description

```php
array trader_ma(array $real, [int $timePeriod = ...], [int $mAType = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.
- **`$mAType`** — Type of Moving Average. TRADER_MA_TYPE_* series of constants should be used.

## Return Values

Returns an array with calculated data or false on failure.
