---
id: "en-php-function-function-trader-t3"
language: "php"
lang: "en"
category: "function"
name: "trader_t3"
title: "Triple Exponential Moving Average (T3)"
signature: "array trader_t3(array $real, [int $timePeriod = ...], [float $vFactor = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-t3.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Triple Exponential Moving Average (T3)

## Description

```php
array trader_t3(array $real, [int $timePeriod = ...], [float $vFactor = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.
- **`$vFactor`** — Volume Factor. Valid range from 1 to 0.

## Return Values

Returns an array with calculated data or false on failure.
