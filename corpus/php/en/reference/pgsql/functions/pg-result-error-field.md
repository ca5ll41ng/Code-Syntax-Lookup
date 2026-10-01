---
id: "en-php-function-function-pg-result-error-field"
language: "php"
lang: "en"
category: "function"
name: "pg_result_error_field"
title: "Returns an individual field of an error report"
signature: "string|false|null pg_result_error_field(PgSql\\Result $result, int $field_code)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-result-error-field.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an individual field of an error report

## Description

```php
string|false|null pg_result_error_field(PgSql\Result $result, int $field_code)
```

`pg_result_error_field()` returns one of the detailed error message fields associated with `$result` instance. The error field is specified by the `$field_code`.

Because `pg_query()` and `pg_query_params()` return `false` if the query fails, you must use `pg_send_query()` and `pg_get_result()` to get the result handle.

If you need to get additional error information from failed `pg_query()` queries, use `pg_set_error_verbosity()` and `pg_last_error()` and then parse the result.

## Parameters

- **`$result`** — An `PgSql\Result` instance, returned by `pg_query()`, `pg_query_params()` or `pg_execute()`(among others).
- **`$field_code`** — Possible `$field_code` values are: `PGSQL_DIAG_SEVERITY`, `PGSQL_DIAG_SQLSTATE`, `PGSQL_DIAG_MESSAGE_PRIMARY`, `PGSQL_DIAG_MESSAGE_DETAIL`, `PGSQL_DIAG_MESSAGE_HINT`, `PGSQL_DIAG_STATEMENT_POSITION`, `PGSQL_DIAG_INTERNAL_POSITION`, `PGSQL_DIAG_INTERNAL_QUERY`, `PGSQL_DIAG_CONTEXT`, `PGSQL_DIAG_SOURCE_FILE`, `PGSQL_DIAG_SOURCE_LINE` or `PGSQL_DIAG_SOURCE_FUNCTION`.

## Return Values

A `string` containing the contents of the error field, `null` if the field does not exist or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$result` parameter expects an `PgSql\Result` instance now; previously, a `resource` was expected. |

## Examples

**`pg_result_error_field()` example**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from doesnotexist;");
  }
  
  $res1 = pg_get_result($dbconn);
  echo pg_result_error_field($res1, PGSQL_DIAG_SQLSTATE);
?>

    
```

## See Also

`pg_result_error()`
