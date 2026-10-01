---
id: "en-php-function-function-odbc-cursor"
language: "php"
lang: "en"
category: "function"
name: "odbc_cursor"
title: "Get cursorname"
signature: "string|false odbc_cursor(Odbc\\Result $statement)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-cursor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get cursorname

## Description

```php
string|false odbc_cursor(Odbc\Result $statement)
```

Gets the cursorname for the given result_id.

## Parameters

- **`$statement`** — The ODBC result object.

## Return Values

Returns the cursor name, as a string, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
