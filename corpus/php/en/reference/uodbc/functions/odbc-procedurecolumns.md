---
id: "en-php-function-function-odbc-procedurecolumns"
language: "php"
lang: "en"
category: "function"
name: "odbc_procedurecolumns"
title: "Retrieve information about parameters to procedures"
signature: "Odbc\\Result|false odbc_procedurecolumns(Odbc\\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $procedure = null, string|null $column = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-procedurecolumns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve information about parameters to procedures

## Description

```php
Odbc\Result|false odbc_procedurecolumns(Odbc\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $procedure = null, string|null $column = null)
```

Retrieve information about parameters to procedures.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$procedure`** — The proc. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$column`** — The column. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.

## Return Values

Returns the list of input and output parameters, as well as the columns that make up the result set for the specified procedures. Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- `PROCEDURE_CAT`
- `PROCEDURE_SCHEM`
- `PROCEDURE_NAME`
- `COLUMN_NAME`
- `COLUMN_TYPE`
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

The result set is ordered by `PROCEDURE_CAT`, `PROCEDURE_SCHEM`, `PROCEDURE_NAME` and `COLUMN_TYPE`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | Prior to this version, the function could only be called with either one or five arguments. |

## Examples

**List Columns of a stored Procedure**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$columns = odbc_procedurecolumns($conn, 'TutorialDB', 'dbo', 'GetEmployeeSalesYTD;1', '%');
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
    [PROCEDURE_CAT] => TutorialDB
    [PROCEDURE_SCHEM] => dbo
    [PROCEDURE_NAME] => GetEmployeeSalesYTD;1
    [COLUMN_NAME] => @SalesPerson
    [COLUMN_TYPE] => 1
    [DATA_TYPE] => -9
    [TYPE_NAME] => nvarchar
    [COLUMN_SIZE] => 50
    [BUFFER_LENGTH] => 100
    [DECIMAL_DIGITS] =>
    [NUM_PREC_RADIX] =>
    [NULLABLE] => 1
    [REMARKS] =>
    [COLUMN_DEF] =>
    [SQL_DATA_TYPE] => -9
    [SQL_DATETIME_SUB] =>
    [CHAR_OCTET_LENGTH] => 100
    [ORDINAL_POSITION] => 1
    [IS_NULLABLE] => YES
)

   
```

## See Also

`odbc_columns()`
