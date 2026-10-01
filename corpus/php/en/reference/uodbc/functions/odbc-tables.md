---
id: "en-php-function-function-odbc-tables"
language: "php"
lang: "en"
category: "function"
name: "odbc_tables"
title: "Get the list of table names stored in a specific data source"
signature: "Odbc\\Result|false odbc_tables(Odbc\\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $table = null, string|null $types = null)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-tables.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the list of table names stored in a specific data source

## Description

```php
Odbc\Result|false odbc_tables(Odbc\Connection $odbc, string|null $catalog = null, string|null $schema = null, string|null $table = null, string|null $types = null)
```

Lists all tables in the requested range.

To support enumeration of qualifiers, owners, and table types, the following special semantics for the `$catalog`, `$schema`, `$table`, and `$table_type` are available:

- If `$catalog` is a single percent character (%) and `$schema` and `$table` are empty strings, then the result set contains a list of valid qualifiers for the data source. (All columns except the TABLE_QUALIFIER column contain NULLs.)
- If `$schema` is a single percent character (%) and `$catalog` and `$table` are empty strings, then the result set contains a list of valid owners for the data source. (All columns except the TABLE_OWNER column contain NULLs.)
- If `$table_type` is a single percent character (%) and `$catalog`, `$schema` and `$table` are empty strings, then the result set contains a list of valid table types for the data source. (All columns except the TABLE_TYPE column contain NULLs.)

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$table`** — The name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$types`** — If `$table_type` is not an empty string, it must contain a list of comma-separated values for the types of interest; each value may be enclosed in single quotes (`'`) or unquoted. For example, `'TABLE','VIEW'` or `TABLE, VIEW`. If the data source does not support a specified table type, `odbc_tables()` does not return any results for that type.

## Return Values

Returns an ODBC result object containing the information or `false` on failure.

The result set has the following columns:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `TABLE_TYPE`
- `REMARKS`

Drivers can report additional columns.

The result set is ordered by `TABLE_TYPE`, `TABLE_CAT`, `TABLE_SCHEM` and `TABLE_NAME`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |
| 8.0.0 | `$schema`, `$table` and `$types` are now nullable. |

## Examples

**List Tables in a Catalog**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$tables = odbc_tables($conn, 'SalesOrders', 'dbo', '%', 'TABLE');
while (($row = odbc_fetch_array($tables))) {
    print_r($row);
    break; // further rows omitted for brevity
}
?>

   
```

The above example will output something similar to:

```text


Array
(
    [TABLE_CAT] => SalesOrders
    [TABLE_SCHEM] => dbo
    [TABLE_NAME] => Orders
    [TABLE_TYPE] => TABLE
    [REMARKS] =>
)

   
```

## See Also

`odbc_tableprivileges()` `odbc_columns()` `odbc_specialcolumns()` `odbc_statistics()` `odbc_procedures()`
