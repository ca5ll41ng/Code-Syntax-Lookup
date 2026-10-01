---
id: "en-php-function-function-odbc-field-num"
language: "php"
lang: "en"
category: "function"
name: "odbc_field_num"
title: "Return column number"
signature: "int|false odbc_field_num(Odbc\\Result $statement, string $field)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-field-num.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return column number

## Description

```php
int|false odbc_field_num(Odbc\Result $statement, string $field)
```

Gets the number of the column slot that corresponds to the named field in the given result object.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$field`** — The field name.

## Return Values

Returns the field number as an integer, or `false` on error. Field numbering starts at 1.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
