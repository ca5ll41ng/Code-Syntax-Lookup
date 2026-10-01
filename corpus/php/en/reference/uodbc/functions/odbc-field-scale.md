---
id: "en-php-function-function-odbc-field-scale"
language: "php"
lang: "en"
category: "function"
name: "odbc_field_scale"
title: "Get the scale of a field"
signature: "int|false odbc_field_scale(Odbc\\Result $statement, int $field)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-field-scale.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the scale of a field

## Description

```php
int|false odbc_field_scale(Odbc\Result $statement, int $field)
```

Gets the scale of the field referenced by number in the given result identifier.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$field`** — The field number. Field numbering starts at 1.

## Return Values

Returns the field scale as an integer, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
