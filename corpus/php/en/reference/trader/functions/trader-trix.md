---
id: "en-php-function-function-trader-trix"
language: "php"
lang: "en"
category: "function"
name: "trader_trix"
title: "1-day Rate-Of-Change (ROC) of a Triple Smooth EMA"
signature: "array trader_trix(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-trix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 1-day Rate-Of-Change (ROC) of a Triple Smooth EMA

## Description

```php
array trader_trix(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
