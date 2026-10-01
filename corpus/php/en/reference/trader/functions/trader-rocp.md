---
id: "en-php-function-function-trader-rocp"
language: "php"
lang: "en"
category: "function"
name: "trader_rocp"
title: "Rate of change Percentage: (price-prevPrice)/prevPrice"
signature: "array trader_rocp(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-rocp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rate of change Percentage: (price-prevPrice)/prevPrice

## Description

```php
array trader_rocp(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
