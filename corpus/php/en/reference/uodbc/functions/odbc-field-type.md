---
id: "en-php-function-function-odbc-field-type"
language: "php"
lang: "en"
category: "function"
name: "odbc_field_type"
title: "Datatype of a field"
signature: "string|false odbc_field_type(Odbc\\Result $statement, int $field)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-field-type.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Datatype of a field

## Description

```php
string|false odbc_field_type(Odbc\Result $statement, int $field)
```

Gets the SQL type of the field referenced by number in the given result identifier.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$field`** — The field number. Field numbering starts at 1.

## Return Values

Returns the field type as a string, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
