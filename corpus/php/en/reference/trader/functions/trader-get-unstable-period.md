---
id: "en-php-function-function-trader-get-unstable-period"
language: "php"
lang: "en"
category: "function"
name: "trader_get_unstable_period"
title: "Get unstable period"
signature: "int trader_get_unstable_period(int $functionId)"
module: "trader"
source_url: "https://www.php.net/manual/en/function.trader-get-unstable-period.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get unstable period

## Description

```php
int trader_get_unstable_period(int $functionId)
```

Get unstable period factor for a particular function.

## Parameters

- **`$functionId`** — Function ID the factor to be read for. TRADER_FUNC_UNST_* series of constants should be used.

## Return Values

Returns the unstable period factor for the corresponding function.
