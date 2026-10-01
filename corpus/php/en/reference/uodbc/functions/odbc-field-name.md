---
id: "en-php-function-function-odbc-field-name"
language: "php"
lang: "en"
category: "function"
name: "odbc_field_name"
title: "Get the columnname"
signature: "string|false odbc_field_name(Odbc\\Result $statement, int $field)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-field-name.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the columnname

## Description

```php
string|false odbc_field_name(Odbc\Result $statement, int $field)
```

Gets the name of the field occupying the given column number in the given result object.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$field`** — The field number. Field numbering starts at 1.

## Return Values

Returns the field name as a string, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
