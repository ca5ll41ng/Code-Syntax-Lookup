---
id: "en-php-function-function-odbc-statistics"
language: "php"
lang: "en"
category: "function"
name: "odbc_statistics"
title: "Retrieve statistics about a table"
signature: "Odbc\\Result|false odbc_statistics(Odbc\\Connection $odbc, string|null $catalog, string $schema, string $table, int $unique, int $accuracy)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-statistics.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieve statistics about a table

## Description

```php
Odbc\Result|false odbc_statistics(Odbc\Connection $odbc, string|null $catalog, string $schema, string $table, int $unique, int $accuracy)
```

Get statistics about a table and its indexes.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance).
- **`$table`** — The table name.
- **`$unique`** — The type of the index. One of `SQL_INDEX_UNIQUE` or `SQL_INDEX_ALL`.
- **`$accuracy`** — One of `SQL_ENSURE` or `SQL_QUICK`. The latter requests that the driver retrieve the `CARDINALITY` and `PAGES` only if they are readily available from the server.

## Return Values

Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- `TABLE_CAT`
- `TABLE_SCHEM`
- `TABLE_NAME`
- `NON_UNIQUE`
- `INDEX_QUALIFIER`
- `INDEX_NAME`
- `TYPE`
- `ORDINAL_POSITION`
- `COLUMN_NAME`
- `ASC_OR_DESC`
- `CARDINALITY`
- `PAGES`
- `FILTER_CONDITION`

Drivers can report additional columns.

The result set is ordered by `NON_UNIQUE`, `TYPE`, `INDEX_QUALIFIER`, `INDEX_NAME` and `ORDINAL_POSITION`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |

## Examples

**List Statistics of a Table**

```php


<?php
$conn = odbc_connect($dsn, $user, $pass);
$statistics = odbc_statistics($conn, 'TutorialDB', 'dbo', 'TEST', SQL_INDEX_UNIQUE, SQL_QUICK);
while (($row = odbc_fetch_array($statistics))) {
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
    [NON_UNIQUE] =>
    [INDEX_QUALIFIER] =>
    [INDEX_NAME] =>
    [TYPE] => 0
    [ORDINAL_POSITION] =>
    [COLUMN_NAME] =>
    [ASC_OR_DESC] =>
    [CARDINALITY] => 15
    [PAGES] => 3
    [FILTER_CONDITION] =>
)

   
```

## See Also

`odbc_tables()`
