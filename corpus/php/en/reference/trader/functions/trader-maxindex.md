---
id: "en-php-function-function-trader-maxindex"
language: "php"
lang: "en"
category: "function"
name: "trader_maxindex"
title: "Index of highest value over a specified period"
signature: "array trader_maxindex(array $real, [int $timePeriod = ...])"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-maxindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Index of highest value over a specified period

## Description

```php
array trader_maxindex(array $real, [int $timePeriod = ...])
```

## Parameters

- **`$real`** — Array of real values.
- **`$timePeriod`** — Number of period. Valid range from 2 to 100000.

## Return Values

Returns an array with calculated data or false on failure.
