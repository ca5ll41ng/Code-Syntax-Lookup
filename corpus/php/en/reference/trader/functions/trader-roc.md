---
id: "en-php-function-function-trader-roc"
language: "php"
lang: "en"
category: "function"
name: "trader_roc"
title: "Rate of change : ((price/prevPrice)-1)*100"
signature: "array trader_roc(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-roc.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Rate of change : ((price/prevPrice)-1)*100

## Description

```php
array trader_roc(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
