---
id: "en-php-function-function-trader-cdlbelthold"
language: "php"
lang: "en"
category: "function"
name: "trader_cdlbelthold"
title: "Belt-hold"
signature: "array trader_cdlbelthold(array $open, array $high, array $low, array $close)"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-cdlbelthold.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Belt-hold

## Description

```php
array trader_cdlbelthold(array $open, array $high, array $low, array $close)
```

## Parameters

- **`$open`** — Opening price, array of real values.
- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.

## Return Values

Returns an array with calculated data or false on failure.
