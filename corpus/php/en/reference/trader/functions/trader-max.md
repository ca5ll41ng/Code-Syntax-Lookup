---
id: "en-php-function-function-trader-max"
language: "php"
lang: "en"
category: "function"
name: "trader_max"
title: "Highest value over a specified period"
signature: "array trader_max(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-max.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Highest value over a specified period

## Description

```php
array trader_max(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
