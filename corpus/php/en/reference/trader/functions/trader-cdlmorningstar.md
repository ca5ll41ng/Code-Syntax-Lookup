---
id: "en-php-function-function-trader-cdlmorningstar"
language: "php"
lang: "en"
category: "function"
name: "trader_cdlmorningstar"
title: "Morning Star"
signature: "array trader_cdlmorningstar(array $open, array $high, array $low, array $close, [float $penetration = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-cdlmorningstar.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Morning Star

## Description

```php
array trader_cdlmorningstar(array $open, array $high, array $low, array $close, [float $penetration = ...])
```

## Parameters

- **`$open`** — Opening price, array of real values.
- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$penetration`** — Percentage of penetration of a candle within another candle.

## Return Values

Returns an array with calculated data or false on failure.
