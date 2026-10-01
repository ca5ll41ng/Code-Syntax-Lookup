---
id: "en-php-function-function-odbc-specialcolumns"
language: "php"
lang: "en"
category: "function"
name: "odbc_specialcolumns"
title: "Retrieves special columns"
signature: "Odbc\\Result|false odbc_specialcolumns(Odbc\\Connection $odbc, int $type, string|null $catalog, string $schema, string $table, int $scope, int $nullable)"
module: "uodbc"
source_url: "https://www.php.net/manual/en/function.odbc-specialcolumns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Retrieves special columns

## Description

```php
Odbc\Result|false odbc_specialcolumns(Odbc\Connection $odbc, int $type, string|null $catalog, string $schema, string $table, int $scope, int $nullable)
```

Retrieves either the optimal set of columns that uniquely identifies a row in the table, or columns that are automatically updated when any value in the row is updated by a transaction.

## Parameters

- **`$odbc`** — The ODBC connection object, see `odbc_connect()` for details.
- **`$type`** — When the type argument is `SQL_BEST_ROWID`, `odbc_specialcolumns()` returns the column or columns that uniquely identify each row in the table. — When the type argument is `SQL_ROWVER`, `odbc_specialcolumns()` returns the column or columns in the specified table, if any, that are automatically updated by the data source when any value in the row is updated by any transaction.
- **`$catalog`** — The catalog ('qualifier' in ODBC 2 parlance).
- **`$schema`** — The schema ('owner' in ODBC 2 parlance).
- **`$table`** — The table.
- **`$scope`** — The scope, which orders the result set. One of `SQL_SCOPE_CURROW`, `SQL_SCOPE_TRANSACTION` or `SQL_SCOPE_SESSION`.
- **`$nullable`** — Determines whether to return special columns that can have a NULL value. One of `SQL_NO_NULLS` or `SQL_NULLABLE`.

## Return Values

Returns an ODBC result object or `false` on failure.

The result set has the following columns:

- `SCOPE`
- `COLUMN_NAME`
- `DATA_TYPE`
- `TYPE_NAME`
- `COLUMN_SIZE`
- `BUFFER_LENGTH`
- `DECIMAL_DIGITS`
- `PSEUDO_COLUMN`

Drivers can report additional columns.

The result set is ordered by `SCOPE`.

## Changelog

|  |  |
| --- | --- |
| 8.4.0 | `$odbc` expects an `Odbc\Connection` instance now; previously, a `resource` was expected. |
| 8.4.0 | This function returns an `Odbc\Result` instance now; previously, a `resource` was returned. |

## See Also

`odbc_tables()`
