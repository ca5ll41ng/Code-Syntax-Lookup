---
id: "en-php-function-function-trader-plus-di"
language: "php"
lang: "en"
category: "function"
name: "trader_plus_di"
title: "Plus Directional Indicator"
signature: "array trader_plus_di(array $high, array $low, array $close, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-plus-di.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Plus Directional Indicator

## Description

```php
array trader_plus_di(array $high, array $low, array $close, [int $timePeriod = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
