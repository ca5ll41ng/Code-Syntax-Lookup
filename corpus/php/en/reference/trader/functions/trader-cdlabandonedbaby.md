---
id: "en-php-function-function-trader-cdlabandonedbaby"
language: "php"
lang: "en"
category: "function"
name: "trader_cdlabandonedbaby"
title: "Abandoned Baby"
signature: "array trader_cdlabandonedbaby(array $open, array $high, array $low, array $close, [float $penetration = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-cdlabandonedbaby.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Abandoned Baby

## Description

```php
array trader_cdlabandonedbaby(array $open, array $high, array $low, array $close, [float $penetration = ...])
```

## Parameters

- **`$open`** — Opening price, array of real values.
- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$penetration`** — Percentage of penetration of a candle within another candle.

## Return Values

Returns an array with calculated data or false on failure.
