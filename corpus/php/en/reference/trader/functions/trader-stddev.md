---
id: "en-php-function-function-trader-stddev"
language: "php"
lang: "en"
category: "function"
name: "trader_stddev"
title: "Standard Deviation"
signature: "array trader_stddev(array $real, [int $timePeriod = ...], [float $nbDev = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-stddev.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Standard Deviation

## Description

```php
array trader_stddev(array $real, [int $timePeriod = ...], [float $nbDev = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.
- **`$nbDev`**

## Return Values

Returns an array with calculated data or false on failure.
