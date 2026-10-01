---
id: "en-php-function-function-pg-send-prepare"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["sql_injection"],"cwe":["CWE-89"],"params":[3]}
name: "pg_send_prepare"
title: "Sends a request to create a prepared statement with the given parameters, without waiting for completion"
signature: "int|bool pg_send_prepare(PgSql\\Connection $connection, string $statement_name, string $query)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-send-prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sends a request to create a prepared statement with the given parameters, without waiting for completion

## Description

```php
int|bool pg_send_prepare(PgSql\Connection $connection, string $statement_name, string $query)
```

Sends a request to create a prepared statement with the given parameters, without waiting for completion.

This is an asynchronous version of `pg_prepare()`: it returns `true` if it was able to dispatch the request, and `false` if not. After a successful call, call `pg_get_result()` to determine whether the server successfully created the prepared statement. The function's parameters are handled identically to `pg_prepare()`. Like `pg_prepare()`, it will not work on pre-7.4 versions of PostgreSQL.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$statement_name`** — The name to give the prepared statement. Must be unique per-connection. If "" is specified, then an unnamed statement is created, overwriting any previously defined unnamed statement.
- **`$query`** — The parameterized SQL statement. Must contain only a single statement. (multiple statements separated by semi-colons are not allowed.) If any parameters are used, they are referred to as $1, $2, etc.

## Return Values

Returns `true` on success, `false` or `0` on failure. Use `pg_get_result()` to determine the query result.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**Using `pg_send_prepare()`**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // Prepare a query for execution
  if (!pg_connection_busy($dbconn)) {
    pg_send_prepare($dbconn, "my_query", 'SELECT * FROM shops WHERE name = $1');
    $res1 = pg_get_result($dbconn);
  }

  // Execute the prepared query.  Note that it is not necessary to escape
  // the string "Joe's Widgets" in any way
  if (!pg_connection_busy($dbconn)) {
    pg_send_execute($dbconn, "my_query", array("Joe's Widgets"));
    $res2 = pg_get_result($dbconn);
  }
  
  // Execute the same prepared query, this time with a different parameter
  if (!pg_connection_busy($dbconn)) {
    pg_send_execute($dbconn, "my_query", array("Clothes Clothes Clothes"));
    $res3 = pg_get_result($dbconn);
  }
  
?>

    
```

## See Also

`pg_connect()` `pg_pconnect()` `pg_execute()` `pg_send_execute()` `pg_send_query_params()`
