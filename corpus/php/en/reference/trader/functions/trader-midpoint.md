---
id: "en-php-function-function-trader-midpoint"
language: "php"
lang: "en"
category: "function"
name: "trader_midpoint"
title: "MidPoint over period"
signature: "array trader_midpoint(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-midpoint.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MidPoint over period

## Description

```php
array trader_midpoint(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
