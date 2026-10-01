---
id: "en-php-function-function-trader-correl"
language: "php"
lang: "en"
category: "function"
name: "trader_correl"
title: "Pearson's Correlation Coefficient (r)"
signature: "array trader_correl(array $real0, array $real1, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-correl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Pearson's Correlation Coefficient (r)

## Description

```php
array trader_correl(array $real0, array $real1, [int $timePeriod = ...])
```

## Parameters

- **`$real0`** — Array of real values.
- **`$real1`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
