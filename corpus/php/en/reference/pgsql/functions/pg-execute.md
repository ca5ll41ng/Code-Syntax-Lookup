---
id: "en-php-function-function-pg-execute"
language: "php"
lang: "en"
category: "function"
name: "pg_execute"
title: "Sends a request to execute a prepared statement with given parameters, and waits for the result"
signature: "PgSql\\Result|false pg_execute([PgSql\\Connection $connection = ...], string $statement_name, array $params)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends a request to execute a prepared statement with given parameters, and waits for the result

## Description

```php
PgSql\Result|false pg_execute([PgSql\Connection $connection = ...], string $statement_name, array $params)
```

Sends a request to execute a prepared statement with given parameters, and waits for the result.

`pg_execute()` is like `pg_query_params()`, but the command to be executed is specified by naming a previously-prepared statement, instead of giving a query string. This feature allows commands that will be used repeatedly to be parsed and planned just once, rather than each time they are executed. The statement must have been prepared previously in the current session.

The parameters are identical to `pg_query_params()`, except that the name of a prepared statement is given instead of a query string.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$statement_name`** — The name of the prepared statement to execute. if "" is specified, then the unnamed statement is executed. The name must have been previously prepared using `pg_prepare()`, `pg_send_prepare()` or a `PREPARE` SQL command.
- **`$params`** — An array of parameter values to substitute for the $1, $2, etc. placeholders in the original prepared query string. The number of elements in the array must match the number of placeholders.
  > Elements are converted to strings by calling this function.



## Return Values

An `PgSql\Result` instance on success, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | Returns an `PgSql\Result` instance now; previously, a `resource` was returned. |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**Using `pg_execute()`**

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

`pg_prepare()` `pg_send_prepare()` `pg_query_params()`
