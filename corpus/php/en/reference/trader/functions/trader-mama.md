---
id: "en-php-function-function-trader-mama"
language: "php"
lang: "en"
category: "function"
name: "trader_mama"
title: "MESA Adaptive Moving Average"
signature: "array trader_mama(array $real, [float $fastLimit = ...], [float $slowLimit = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-mama.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# MESA Adaptive Moving Average

## Description

```php
array trader_mama(array $real, [float $fastLimit = ...], [float $slowLimit = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$fastLimit`** — Upper limit use in the adaptive algorithm. Valid range from 0.01 to 0.99.
- **`$slowLimit`** — Lower limit use in the adaptive algorithm. Valid range from 0.01 to 0.99.

## Return Values

Returns an array with calculated data or false on failure.
