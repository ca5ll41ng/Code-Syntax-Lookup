---
id: "en-php-function-function-trader-cci"
language: "php"
lang: "en"
category: "function"
name: "trader_cci"
title: "Commodity Channel Index"
signature: "array trader_cci(array $high, array $low, array $close, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-cci.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commodity Channel Index

## Description

```php
array trader_cci(array $high, array $low, array $close, [int $timePeriod = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
