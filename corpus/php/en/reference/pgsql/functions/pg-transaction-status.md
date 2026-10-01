---
id: "en-php-function-function-pg-transaction-status"
language: "php"
lang: "en"
category: "function"
name: "pg_transaction_status"
title: "Returns the current in-transaction status of the server"
signature: "int pg_transaction_status(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-transaction-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current in-transaction status of the server

## Description

```php
int pg_transaction_status(PgSql\Connection $connection)
```

Returns the current in-transaction status of the server.

> `pg_transaction_status()` will give incorrect results when using a PostgreSQL 7.3 server that has the parameter `autocommit` set to off. The server-side autocommit feature has been deprecated and does not exist in later server versions.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.

## Return Values

The status can be `PGSQL_TRANSACTION_IDLE` (currently idle), `PGSQL_TRANSACTION_ACTIVE` (a command is in progress), `PGSQL_TRANSACTION_INTRANS` (idle, in a valid transaction block), or `PGSQL_TRANSACTION_INERROR` (idle, in a failed transaction block). `PGSQL_TRANSACTION_UNKNOWN` is reported if the connection is bad. `PGSQL_TRANSACTION_ACTIVE` is reported only when a query has been sent to the server and not yet completed.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**`pg_transaction_status()` example**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $stat = pg_transaction_status($dbconn);
  if ($stat === PGSQL_TRANSACTION_UNKNOWN) {
      echo 'Connection is bad';
  } else if ($stat === PGSQL_TRANSACTION_IDLE) {
      echo 'Connection is currently idle';
  } else {
      echo 'Connection is in a transaction state';
  }    
?>

    
```
