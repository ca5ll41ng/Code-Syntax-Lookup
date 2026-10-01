---
id: "en-php-function-function-odbc-fetch-row"
language: "php"
lang: "en"
category: "function"
name: "odbc_fetch_row"
title: "Fetch a row"
signature: "bool odbc_fetch_row(Odbc\\Result $statement, int|null $row = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-fetch-row.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch a row

## Description

```php
bool odbc_fetch_row(Odbc\Result $statement, int|null $row = null)
```

Fetches a row of the data that was returned by `odbc_do()` or `odbc_exec()`. After `odbc_fetch_row()` is called, the fields of that row can be accessed with `odbc_result()`.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$row`** — If `$row` is not specified, `odbc_fetch_row()` will try to fetch the next row in the result set. Calls to `odbc_fetch_row()` with and without `$row` can be mixed. — To step through the result more than once, you can call `odbc_fetch_row()` with `$row` 1, and then continue doing `odbc_fetch_row()` without `$row` to review the result. If a driver doesn't support fetching rows by number, the `$row` parameter is ignored.

## Return Values

Returns `true` if there was a row, `false` otherwise.

## Errors/Exceptions

An `E_WARNING` is emitted when `$row` is equal or less than zero.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
| 8.4.0 | An `E_WARNING` is now emitted when `$row` is equal or less than zero. |
| 8.0.0 | `$row` is now nullable. |
