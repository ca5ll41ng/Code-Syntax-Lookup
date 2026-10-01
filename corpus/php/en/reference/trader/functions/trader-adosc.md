---
id: "en-php-function-function-trader-adosc"
language: "php"
lang: "en"
category: "function"
name: "trader_adosc"
title: "Chaikin A/D Oscillator"
signature: "array trader_adosc(array $high, array $low, array $close, array $volume, [int $fastPeriod = ...], [int $slowPeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-adosc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Chaikin A/D Oscillator

## Description

```php
array trader_adosc(array $high, array $low, array $close, array $volume, [int $fastPeriod = ...], [int $slowPeriod = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$volume`** — Volume traded, array of real values.
- **`$fastPeriod`** — Number of period for the fast MA. Valid range from 2 to 100000.
- **`$slowPeriod`** — Number of period for the slow MA. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
