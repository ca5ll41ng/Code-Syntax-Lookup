---
id: "en-php-function-function-odbc-num-rows"
language: "php"
lang: "en"
category: "function"
name: "odbc_num_rows"
title: "Number of rows in a result"
signature: "int odbc_num_rows(Odbc\\Result $statement)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-num-rows.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Number of rows in a result

## Description

```php
int odbc_num_rows(Odbc\Result $statement)
```

Gets the number of rows in a result. For INSERT, UPDATE and DELETE statements `odbc_num_rows()` returns the number of rows affected. For a SELECT clause this *can* be the number of rows available.

## Parameters

- **`$statement`** — The ODBC result object returned by `odbc_exec()`.

## Return Values

Returns the number of rows in an ODBC result. This function will return -1 on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |

## Notes

> Using `odbc_num_rows()` to determine the number of rows available after a SELECT will return -1 with many drivers.
