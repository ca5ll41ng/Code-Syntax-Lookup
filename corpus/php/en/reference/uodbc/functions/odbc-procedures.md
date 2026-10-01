---
id: "en-php-function-function-odbc-procedures"
language: "php"
lang: "en"
category: "function"
name: "odbc_procedures"
title: "Get the list of procedures stored in a specific data source"
signature: "Odbc\\Result|false odbc_procedures(Odbc\\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $procedure = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-procedures.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the list of procedures stored in a specific data source

## Description

```php
Odbc\Result|false odbc_procedures(Odbc\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $procedure = null)
```

Lists all procedures in the requested range.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$procedure`** — The name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.

## Return Values

Returns an ODBC result object containing the information or `false` on failure.

The result set has the following columns:

- `PROCEDURE_CAT`
- `PROCEDURE_SCHEM`
- `PROCEDURE_NAME`
- `NUM_INPUT_PARAMS`
- `NUM_OUTPUT_PARAMS`
- `NUM_RESULT_SETS`
- `REMARKS`
- `PROCEDURE_TYPE`

Drivers can report additional columns.

The result set is ordered by `PROCEDURE_CAT`, `PROCEDURE_SCHEMA` and `PROCEDURE_NAME`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | Prior to this version, the function could only be called with either one or four arguments. |

## Examples

**List stored Procedures of a Database**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$procedures = odbc_procedures($conn, $catalog, $schema, '%');
while (($row = odbc_fetch_array($procedures))) {
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
    [NUM_INPUT_PARAMS] => -1
    [NUM_OUTPUT_PARAMS] => -1
    [NUM_RESULT_SETS] => -1
    [REMARKS] =>
    [PROCEDURE_TYPE] => 2
)

   
```

## See Also

`odbc_procedurecolumns()` `odbc_tables()`
