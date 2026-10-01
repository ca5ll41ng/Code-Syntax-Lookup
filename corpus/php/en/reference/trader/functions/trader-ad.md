---
id: "en-php-function-function-trader-ad"
language: "php"
lang: "en"
category: "function"
name: "trader_ad"
title: "Chaikin A/D Line"
signature: "array trader_ad(array $high, array $low, array $close, array $volume)"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-ad.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Chaikin A/D Line

## Description

```php
array trader_ad(array $high, array $low, array $close, array $volume)
```

## Parameters

- **`$high`** — High price, array of real values.
- **`$low`** — Low price, array of real values.
- **`$close`** — Closing price, array of real values.
- **`$volume`** — Volume traded, array of real values.

## Return Values

Returns an array with calculated data or false on failure.
