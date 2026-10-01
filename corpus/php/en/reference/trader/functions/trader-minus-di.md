---
id: "en-php-function-function-trader-minus-di"
language: "php"
lang: "en"
category: "function"
name: "trader_minus_di"
title: "Minus Directional Indicator"
signature: "array trader_minus_di(array $high, array $low, array $close, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-minus-di.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Minus Directional Indicator

## Description

```php
array trader_minus_di(array $high, array $low, array $close, [int $timePeriod = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
