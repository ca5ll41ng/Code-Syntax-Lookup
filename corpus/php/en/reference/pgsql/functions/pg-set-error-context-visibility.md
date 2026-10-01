---
id: "en-php-function-function-pg-set-error-context-visibility"
language: "php"
lang: "en"
category: "function"
name: "pg_set_error_context_visibility"
title: "Determines the visibility of the context's error messages returned by `pg_last_error()` and `pg_result_error()`"
signature: "int pg_set_error_context_visibility(PgSql\\Connection $connection, int $visibility)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-set-error-context-visibility.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Determines the visibility of the context's error messages returned by `pg_last_error()` and `pg_result_error()`

## Description

```php
int pg_set_error_context_visibility(PgSql\Connection $connection, int $visibility)
```

Determines the visibility of the context's error messages returned by `pg_last_error()` and `pg_result_error()`

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$visibility`** — The required visibility: `PGSQL_SHOW_CONTEXT_NEVER`, `PGSQL_SHOW_CONTEXT_ERRORS` or `PGSQL_SHOW_CONTEXT_ALWAYS`.

## Return Values

The previous visibility level: `PGSQL_SHOW_CONTEXT_NEVER`, `PGSQL_SHOW_CONTEXT_ERRORS` or `PGSQL_SHOW_CONTEXT_ALWAYS`.

## Examples

**`pg_set_error_context_visibility()` example**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from doesnotexist;");
  }

  pg_set_error_context_visibility($dbconn, PGSQL_SHOW_CONTEXT_ALWAYS);
  $res1 = pg_get_result($dbconn);
  echo pg_result_error($res1);
?>

   
```

## See Also

`pg_last_error()` `pg_result_error()`
