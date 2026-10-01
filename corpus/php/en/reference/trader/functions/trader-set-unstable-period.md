---
id: "en-php-function-function-trader-set-unstable-period"
language: "php"
lang: "en"
category: "function"
name: "trader_set_unstable_period"
title: "Set unstable period"
signature: "void trader_set_unstable_period(int $functionId, int $timePeriod)"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-set-unstable-period.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set unstable period

## Description

```php
void trader_set_unstable_period(int $functionId, int $timePeriod)
```

Influences unstable period factor for functions, which are sensible to it. More information about unstable periods can be found on the [TA-Lib]() API documentation page.

## Parameters

- **`$functionId`** — Function ID the factor should be set for. TRADER_FUNC_UNST_* constant series can be used to affect the corresponding function.
- **`$timePeriod`** — Unstable period value.

## Return Values

No value is returned.
