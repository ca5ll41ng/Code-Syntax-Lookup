---
id: "en-php-function-function-trader-mfi"
language: "php"
lang: "en"
category: "function"
name: "trader_mfi"
title: "Money Flow Index"
signature: "array trader_mfi(array $high, array $low, array $close, array $volume, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-mfi.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Money Flow Index

## Description

```php
array trader_mfi(array $high, array $low, array $close, array $volume, [int $timePeriod = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$volume`** — Volume traded, array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
