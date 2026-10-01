---
id: "en-php-function-function-pg-prepare"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[3]}
name: "pg_prepare"
title: "Submits a request to the server to create a prepared statement with the given parameters, and waits for completion"
signature: "PgSql\\Result|false pg_prepare([PgSql\\Connection $connection = ...], string $statement_name, string $query)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Submits a request to the server to create a prepared statement with the given parameters, and waits for completion

## Description

```php
PgSql\Result|false pg_prepare([PgSql\Connection $connection = ...], string $statement_name, string $query)
```

`pg_prepare()` creates a prepared statement for later execution with `pg_execute()` or `pg_send_execute()`. This feature allows commands that will be used repeatedly to be parsed and planned just once, rather than each time they are executed.

The function creates a prepared statement named `$statement_name` from the `$query` string, which must contain a single SQL command. `$statement_name` may be `""` to create an unnamed statement, in which case any pre-existing unnamed statement is automatically replaced; otherwise it is an error if the statement name is already defined in the current session. If any parameters are used, they are referred to in the `$query` as `$1`, `$2`, etc.

Prepared statements for use with `pg_prepare()` can also be created by executing SQL `PREPARE` statements. (But `pg_prepare()` is more flexible since it does not require parameter types to be pre-specified.) Also, although there is no PHP function for deleting a prepared statement, the SQL `DEALLOCATE` statement can be used for that purpose.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$statement_name`** — The name to give the prepared statement. Must be unique per-connection. If `""` is specified, then an unnamed statement is created, overwriting any previously defined unnamed statement.
- **`$query`** — The parameterized SQL statement. Must contain only a single statement (multiple statements separated by semi-colons are not allowed). If any parameters are used, they are referred to as `$1`, `$2`, etc.

## Return Values

An `PgSql\Result` instance on success, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Returns an `PgSql\Result` instance now; previously, a `resource` was returned. |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**Using `pg_prepare()`**

```php


<?php

// Connect to a database named "mary"
$dbconn = pg_connect("dbname=mary");

// Prepare a query for execution
$result = pg_prepare($dbconn, "my_query", 'SELECT * FROM shops WHERE name = $1');

// Execute the prepared query.  Note that it is not necessary to escape
// the string "Joe's Widgets" in any way
$result = pg_execute($dbconn, "my_query", array("Joe's Widgets"));

// Execute the same prepared query, this time with a different parameter
$result = pg_execute($dbconn, "my_query", array("Clothes Clothes Clothes"));

?>

    
```

## See Also

`pg_execute()` `pg_send_execute()`
