---
id: "en-php-function-function-trader-rocr100"
language: "php"
lang: "en"
category: "function"
name: "trader_rocr100"
title: "Rate of change ratio 100 scale: (price/prevPrice)*100"
signature: "array trader_rocr100(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-rocr100.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rate of change ratio 100 scale: (price/prevPrice)*100

## Description

```php
array trader_rocr100(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
