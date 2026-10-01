---
id: "en-php-function-function-odbc-columns"
language: "php"
lang: "en"
category: "function"
name: "odbc_columns"
title: "Lists the column names in specified tables"
signature: "Odbc\\Result|false odbc_columns(Odbc\\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $table = null, string|null $column = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-columns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lists the column names in specified tables

## Description

```php
Odbc\Result|false odbc_columns(Odbc\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $table = null, string|null $column = null)
```

Lists all columns in the requested range.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$table`** — The table name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$column`** — The column name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.

## Return Values

Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `COLUMN_NAME`
- `DATA_TYPE`
- `TYPE_NAME`
- `COLUMN_SIZE`
- `BUFFER_LENGTH`
- `DECIMAL_DIGITS`
- `NUM_PREC_RADIX`
- `NULLABLE`
- `REMARKS`
- `COLUMN_DEF`
- `SQL_DATA_TYPE`
- `SQL_DATETIME_SUB`
- `CHAR_OCTET_LENGTH`
- `ORDINAL_POSITION`
- `IS_NULLABLE`

Drivers can report additional columns.

The result set is ordered by `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME` and `ORDINAL_POSITION`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.0.0 | `$schema`, `$table` and `$column` are now nullable. |

## Examples

**List Columns of a Table**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$columns = odbc_columns($conn, 'TutorialDB', 'dbo', 'test', '%');
while (($row = odbc_fetch_array($columns))) {
    print_r($row);
    break; // further rows omitted for brevity
}
?>

   
```

The above example will output something similar to:

```text


Array
(
    [TABLE_CAT] => TutorialDB
    [TABLE_SCHEM] => dbo
    [TABLE_NAME] => TEST
    [COLUMN_NAME] => id
    [DATA_TYPE] => 4
    [TYPE_NAME] => int
    [COLUMN_SIZE] => 10
    [BUFFER_LENGTH] => 4
    [DECIMAL_DIGITS] => 0
    [NUM_PREC_RADIX] => 10
    [NULLABLE] => 0
    [REMARKS] =>
    [COLUMN_DEF] =>
    [SQL_DATA_TYPE] => 4
    [SQL_DATETIME_SUB] =>
    [CHAR_OCTET_LENGTH] =>
    [ORDINAL_POSITION] => 1
    [IS_NULLABLE] => NO
)

   
```

## See Also

`odbc_columnprivileges()` `odbc_procedurecolumns()`
