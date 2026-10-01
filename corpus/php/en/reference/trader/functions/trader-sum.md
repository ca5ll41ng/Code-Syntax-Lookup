---
id: "en-php-function-function-trader-sum"
language: "php"
lang: "en"
category: "function"
name: "trader_sum"
title: "Summation"
signature: "array trader_sum(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-sum.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Summation

## Description

```php
array trader_sum(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
