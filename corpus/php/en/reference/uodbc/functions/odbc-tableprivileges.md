---
id: "en-php-function-function-odbc-tableprivileges"
language: "php"
lang: "en"
category: "function"
name: "odbc_tableprivileges"
title: "Lists tables and the privileges associated with each table"
signature: "Odbc\\Result|false odbc_tableprivileges(Odbc\\Connection $odbc, string|null $catalog, string $schema, string $table)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-tableprivileges.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lists tables and the privileges associated with each table

## Description

```php
Odbc\Result|false odbc_tableprivileges(Odbc\Connection $odbc, string|null $catalog, string $schema, string $table)
```

Lists tables in the requested range and the privileges associated with each table.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.
- **`$table`** — The name. This parameter accepts the following search patterns: `&#x25;` to match zero or more characters, and `_` to match a single character.

## Return Values

Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `GRANTOR`
- `GRANTEE`
- `PRIVILEGE`
- `IS_GRANTABLE`

Drivers can report additional columns.

The result set is ordered by `TABLE_CAT`, `TABLE_SCHEM`, `TABLE_NAME`, `PRIVILEGE` and `GRANTEE`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |

## Examples

**List Privileges of a Table**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$privileges = odbc_tableprivileges($conn, 'SalesOrders', 'dbo', 'Orders');
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
    [TABLE_CAT] => SalesOrders
    [TABLE_SCHEM] => dbo
    [TABLE_NAME] => Orders
    [GRANTOR] => dbo
    [GRANTEE] => dbo
    [PRIVILEGE] => DELETE
    [IS_GRANTABLE] => YES
)

   
```

## See Also

`odbc_tables()`
