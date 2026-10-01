---
id: "en-php-function-function-trader-dema"
language: "php"
lang: "en"
category: "function"
name: "trader_dema"
title: "Double Exponential Moving Average"
signature: "array trader_dema(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-dema.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Double Exponential Moving Average

## Description

```php
array trader_dema(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
