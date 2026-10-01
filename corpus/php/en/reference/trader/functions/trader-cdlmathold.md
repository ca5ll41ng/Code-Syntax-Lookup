---
id: "en-php-function-function-trader-cdlmathold"
language: "php"
lang: "en"
category: "function"
name: "trader_cdlmathold"
title: "Mat Hold"
signature: "array trader_cdlmathold(array $open, array $high, array $low, array $close, [float $penetration = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-cdlmathold.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Mat Hold

## Description

```php
array trader_cdlmathold(array $open, array $high, array $low, array $close, [float $penetration = ...])
```

## Parameters

- **`$open`** — Opening price, array of real values.
- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$penetration`** — Percentage of penetration of a candle within another candle.

## Return Values

Returns an array with calculated data or false on failure.
