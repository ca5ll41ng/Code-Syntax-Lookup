---
id: "en-php-function-function-odbc-fetch-into"
language: "php"
lang: "en"
category: "function"
name: "odbc_fetch_into"
title: "Fetch one result row into array"
signature: "int|false odbc_fetch_into(Odbc\\Result $statement, array $array, int|null $row = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-fetch-into.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetch one result row into array

## Description

```php
int|false odbc_fetch_into(Odbc\Result $statement, array $array, int|null $row = null)
```

Fetch one result row into `array`.

## Parameters

- **`$statement`** — The ODBC result object.
- **`$array`** — The result `array` that can be of any type since it will be converted to type array. The array will contain the column values starting at array index 0.
- **`$row`** — The 1-based number of the row to fetch. If omitted or `null`, the next row of the result set is fetched, as `odbc_fetch_row()` does. If the driver does not support fetching rows by number, this parameter is ignored.

## Return Values

Returns the number of columns in the result; `false` on error.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$statement` expects an `Odbc\Result` instance now; previously, a `resource` was expected. |
| 8.4.0 | `$row` is now nullable, and its default value changed from `0` to `null`, consistent with `odbc_fetch_row()`. |

## Examples

**`odbc_fetch_into()` examples**

```php


<?php
$rc = odbc_fetch_into($res_id, $my_array);
?>

    
```

or

```php


<?php
$rc = odbc_fetch_into($res_id, $my_array, 2);
?>

    
```
