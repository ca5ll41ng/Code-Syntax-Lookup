---
id: "en-php-function-function-odbc-longreadlen"
language: "php"
lang: "en"
category: "function"
name: "odbc_longreadlen"
title: "Handling of LONG columns"
signature: "true odbc_longreadlen(Odbc\\Result $statement, int $length)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-longreadlen.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Handling of LONG columns

## Description

```php
true odbc_longreadlen(Odbc\Result $statement, int $length)
```

Controls handling of `LONG`, `LONGVARCHAR` and `LONGVARBINARY` columns. The default length can be set using the uodbc.defaultlrl php.ini directive.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$length`** — The number of bytes returned to PHP is controlled by the parameter length. If it is set to `0`, long column data is passed through to the client (i.e. printed) when retrieved with `odbc_result()`.

## Return Values

Always returns `true`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |

## Notes

> Handling of `LONGVARBINARY` columns is also affected by `odbc_binmode()`.
