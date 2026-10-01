---
id: "en-php-function-function-trader-tsf"
language: "php"
lang: "en"
category: "function"
name: "trader_tsf"
title: "Time Series Forecast"
signature: "array trader_tsf(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-tsf.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Time Series Forecast

## Description

```php
array trader_tsf(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
