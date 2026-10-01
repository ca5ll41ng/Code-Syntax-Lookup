---
id: "en-php-function-function-odbc-free-result"
language: "php"
lang: "en"
category: "function"
name: "odbc_free_result"
title: "Free objects associated with a result"
signature: "true odbc_free_result(Odbc\\Result $statement)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-free-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Free objects associated with a result

## Description

```php
true odbc_free_result(Odbc\Result $statement)
```

Free objects associated with a result.

`odbc_free_result()` only needs to be called if you are worried about using too much memory while your script is running. All result memory will automatically be freed when the script is finished.

## Parameters

- **`$statement`** — The ODBC result object.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |

## Notes

> If auto-commit is disabled (see `odbc_autocommit()`) and you call `odbc_free_result()` before committing, all pending transactions are rolled back.
