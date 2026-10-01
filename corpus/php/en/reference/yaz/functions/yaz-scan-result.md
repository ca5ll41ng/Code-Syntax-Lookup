---
id: "en-php-function-function-yaz-scan-result"
language: "php"
lang: "en"
category: "function"
name: "yaz_scan_result"
title: "Returns Scan Response result"
signature: "array yaz_scan_result(resource $id, [array $result = ...])"
module: "yaz"
source_url: "https://www.php.net/manual/en/function.yaz-scan-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns Scan Response result

## Description

```php
array yaz_scan_result(resource $id, [array $result = ...])
```

`yaz_scan_result()` returns terms and associated information as received from the server in the last performed `yaz_scan()`.

## Parameters

- **`$id`** — The connection resource returned by `yaz_connect()`.
- **`$result`** — If given, this array will be modified to hold additional information taken from the Scan Response: - `number` - Number of entries returned - `stepsize` - Step size - `position` - Position of term - `status` - Scan status

## Return Values

Returns an array (0..n-1) where n is the number of terms returned. Each value is a pair where the first item is the term, and the second item is the result-count.
