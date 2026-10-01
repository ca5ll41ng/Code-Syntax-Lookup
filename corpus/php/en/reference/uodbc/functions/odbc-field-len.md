---
id: "en-php-function-function-odbc-field-len"
language: "php"
lang: "en"
category: "function"
name: "odbc_field_len"
title: "Get the length (precision) of a field"
signature: "int|false odbc_field_len(Odbc\\Result $statement, int $field)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-field-len.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the length (precision) of a field

## Description

```php
int|false odbc_field_len(Odbc\Result $statement, int $field)
```

Gets the length of the field referenced by number in the given result identifier.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$field`** — The field number. Field numbering starts at 1.

## Return Values

Returns the field length, or `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |

## See Also

`odbc_field_scale()` to get the scale of a floating point number
