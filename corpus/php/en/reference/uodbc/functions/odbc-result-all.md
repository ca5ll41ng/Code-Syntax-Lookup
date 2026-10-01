---
id: "en-php-function-function-odbc-result-all"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["xss"],"cwe":["CWE-79"],"params":[2]}
name: "odbc_result_all"
title: "Print result as HTML table"
signature: "#[\\Deprecated(since: '8.1')] int|false odbc_result_all(Odbc\\Result $statement, string $format = \"\")"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-result-all.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Print result as HTML table

## Description

```php
#[\Deprecated(since: '8.1')] int|false odbc_result_all(Odbc\Result $statement, string $format = "")
```

Prints all rows from a result object produced by `odbc_exec()`. The result is printed in HTML table format. The data is *not* escaped.

This function is not supposed to be used in production environments; it is merely meant for development purposes, to get a result set quickly rendered.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$format`** — Additional overall table formatting.

## Return Values

Returns the number of rows in the result or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
| 8.1.0 | This function has been deprecated. |
