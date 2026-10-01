---
id: "en-php-function-function-trader-minmaxindex"
language: "php"
lang: "en"
category: "function"
name: "trader_minmaxindex"
title: "Indexes of lowest and highest values over a specified period"
signature: "array trader_minmaxindex(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-minmaxindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Indexes of lowest and highest values over a specified period

## Description

```php
array trader_minmaxindex(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
