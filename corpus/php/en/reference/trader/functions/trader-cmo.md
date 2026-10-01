---
id: "en-php-function-function-trader-cmo"
language: "php"
lang: "en"
category: "function"
name: "trader_cmo"
title: "Chande Momentum Oscillator"
signature: "array trader_cmo(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-cmo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Chande Momentum Oscillator

## Description

```php
array trader_cmo(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
