---
id: "en-php-function-function-odbc-num-fields"
language: "php"
lang: "en"
category: "function"
name: "odbc_num_fields"
title: "Number of columns in a result"
signature: "int odbc_num_fields(Odbc\\Result $statement)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-num-fields.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Number of columns in a result

## Description

```php
int odbc_num_fields(Odbc\Result $statement)
```

Gets the number of fields (columns) in an ODBC result.

## Parameters

- **`$statement`** — The ODBC result object returned by `odbc_exec()`.

## Return Values

Returns the number of fields, or -1 on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
