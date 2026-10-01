---
id: "en-php-function-function-trader-macdfix"
language: "php"
lang: "en"
category: "function"
name: "trader_macdfix"
title: "Moving Average Convergence/Divergence Fix 12/26"
signature: "array trader_macdfix(array $real, [int $signalPeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-macdfix.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Moving Average Convergence/Divergence Fix 12/26

## Description

```php
array trader_macdfix(array $real, [int $signalPeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$signalPeriod`** — Smoothing for the signal line (nb of period). Valid range from 1 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
