---
id: "en-php-function-function-odbc-columnprivileges"
language: "php"
lang: "en"
category: "function"
name: "odbc_columnprivileges"
title: "Lists columns and associated privileges for the given table"
signature: "Odbc\\Result|false odbc_columnprivileges(Odbc\\Connection $odbc, string|null $catalog, string $schema, string $table, string $column)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-columnprivileges.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lists columns and associated privileges for the given table

## Description

```php
Odbc\Result|false odbc_columnprivileges(Odbc\Connection $odbc, string|null $catalog, string $schema, string $table, string $column)
```

Lists columns and associated privileges for the given table.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$table`** — The table name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$column`** — The column name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.

## Return Values

Returns an ODBC result object or `false` on failure. This result object can be used to fetch a list of columns and associated privileges.

The result set has the following columns:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `COLUMN_NAME`
- `GRANTOR`
- `GRANTEE`
- `PRIVILEGE`
- `IS_GRANTABLE`

Drivers can report additional columns.

The result set is ordered by `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME`, `COLUMN_NAME` and `PRIVILEGE`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |

## Examples

**List Privileges for a Column**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$privileges = odbc_columnprivileges($conn, 'TutorialDB', 'dbo', 'test', 'id');
while (($row = odbc_fetch_array($privileges))) {
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
    [TABLE_NAME] => test
    [COLUMN_NAME] => id
    [GRANTOR] => dbo
    [GRANTEE] => dbo
    [PRIVILEGE] => INSERT
    [IS_GRANTABLE] => YES
)

   
```
