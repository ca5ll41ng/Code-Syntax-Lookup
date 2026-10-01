---
id: "en-php-function-function-sapi-windows-cp-set"
language: "php"
lang: "en"
category: "function"
name: "sapi_windows_cp_set"
title: "Set process codepage"
signature: "bool sapi_windows_cp_set(int $codepage)"
module: "misc"
source_url: "https://www.php.net/manual/en/function.sapi-windows-cp-set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set process codepage

## Description

```php
bool sapi_windows_cp_set(int $codepage)
```

Set the codepage of the current process.

## Parameters

- **`$codepage`** — A codepage identifier.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `sapi_windows_cp_get()`
