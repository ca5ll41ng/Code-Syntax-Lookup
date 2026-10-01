---
id: "en-php-function-function-trader-ultosc"
language: "php"
lang: "en"
category: "function"
name: "trader_ultosc"
title: "Ultimate Oscillator"
signature: "array trader_ultosc(array $high, array $low, array $close, [int $timePeriod1 = ...], [int $timePeriod2 = ...], [int $timePeriod3 = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-ultosc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Ultimate Oscillator

## Description

```php
array trader_ultosc(array $high, array $low, array $close, [int $timePeriod1 = ...], [int $timePeriod2 = ...], [int $timePeriod3 = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$timePeriod1`** — Number of bars for 1st period. Valid range from 1 to 100000.
- **`$timePeriod2`** — Number of bars for 2nd period. Valid range from 1 to 100000.
- **`$timePeriod3`** — Number of bars for 3rd period. Valid range from 1 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
