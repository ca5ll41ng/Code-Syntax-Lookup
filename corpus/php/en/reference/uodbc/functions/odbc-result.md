---
id: "en-php-function-function-odbc-result"
language: "php"
lang: "en"
category: "function"
name: "odbc_result"
title: "Get result data"
signature: "string|bool|null odbc_result(Odbc\\Result $statement, string|int $field)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-result.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get result data

## Description

```php
string|bool|null odbc_result(Odbc\Result $statement, string|int $field)
```

Get result data

## Parameters

- **`$statement`** — The ODBC result object.
- **`$field`** — The field name being retrieved. It can either be an integer containing the column number of the field you want; or it can be a string containing the name of the field.

## Return Values

Returns the string contents of the field, `false` on error, `null` for NULL data, or `true` for binary data.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |

## Examples

The first call to `odbc_result()` returns the value of the third field in the current record of the query result. The second function call to `odbc_result()` returns the value of the field whose field name is "val" in the current record of the query result. An error occurs if a column number parameter for a field is less than one or exceeds the number of columns (or fields) in the current record. Similarly, an error occurs if a field with a name that is not one of the fieldnames of the table(s) that is(are) being queried.

**`odbc_result()` examples**

```php


<?php
$item_3   = odbc_result($Query_ID, 3);
$item_val = odbc_result($Query_ID, "val");
?>

    
```

## Notes

Field indices start from 1. Regarding the way binary or long column data is returned refer to `odbc_binmode()` and `odbc_longreadlen()`.
