---
id: "en-php-function-function-pg-set-error-verbosity"
language: "php"
lang: "en"
category: "function"
name: "pg_set_error_verbosity"
title: "Determines the verbosity of messages returned by `pg_last_error()` and `pg_result_error()`"
signature: "int|false pg_set_error_verbosity([PgSql\\Connection $connection = ...], int $verbosity)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-set-error-verbosity.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines the verbosity of messages returned by `pg_last_error()` and `pg_result_error()`

## Description

```php
int|false pg_set_error_verbosity([PgSql\Connection $connection = ...], int $verbosity)
```

Determines the verbosity of messages returned by `pg_last_error()` and `pg_result_error()`.

`pg_set_error_verbosity()` sets the verbosity mode, returning the connection's previous setting. In `PGSQL_ERRORS_TERSE` mode, returned messages include severity, primary text, and position only; this will normally fit on a single line. The default mode (`PGSQL_ERRORS_DEFAULT`) produces messages that include the above plus any detail, hint, or context fields (these may span multiple lines). The `PGSQL_ERRORS_VERBOSE` mode includes all available fields. Changing the verbosity does not affect the messages available from already-existing result objects, only subsequently-created ones.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$verbosity`** — The required verbosity: `PGSQL_ERRORS_TERSE`, `PGSQL_ERRORS_DEFAULT` or `PGSQL_ERRORS_VERBOSE`.

## Return Values

The previous verbosity level: `PGSQL_ERRORS_TERSE`, `PGSQL_ERRORS_DEFAULT` or `PGSQL_ERRORS_VERBOSE`, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**`pg_set_error_verbosity()` example**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from doesnotexist;");
  }
  
  pg_set_error_verbosity($dbconn, PGSQL_ERRORS_VERBOSE);
  $res1 = pg_get_result($dbconn);
  echo pg_result_error($res1);
?>

    
```

## See Also

`pg_last_error()` `pg_result_error()`
