---
id: "en-php-function-function-trader-sar"
language: "php"
lang: "en"
category: "function"
name: "trader_sar"
title: "Parabolic SAR"
signature: "array trader_sar(array $high, array $low, [float $acceleration = ...], [float $maximum = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-sar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Parabolic SAR

## Description

```php
array trader_sar(array $high, array $low, [float $acceleration = ...], [float $maximum = ...])
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$acceleration`** — Acceleration Factor used up to the Maximum value. Valid range from 0 to TRADER_REAL_MAX.
- **`$maximum`** — Acceleration Factor Maximum value. Valid range from 0 to TRADER_REAL_MAX.

## Return Values

Returns an array with calculated data or false on failure.
