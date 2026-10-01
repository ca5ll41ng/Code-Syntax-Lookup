---
id: "en-php-function-function-pg-put-copy-end"
language: "php"
lang: "en"
category: "function"
name: "pg_put_copy_end"
title: "Signal the completion of a COPY operation to the server"
signature: "int pg_put_copy_end(PgSql\\Connection $connection, string|null $error = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-put-copy-end.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Signal the completion of a COPY operation to the server

## Description

```php
int pg_put_copy_end(PgSql\Connection $connection, string|null $error = null)
```

Sends an end-of-data indication to the server during a `COPY FROM STDIN` operation.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$error`** — If not `null`, the `COPY` operation is forced to fail with the given error message.

## Return Values

Returns `1` on success, `0` if the data could not be queued (only in non-blocking mode), or `-1` on error.

## See Also

 `pg_put_copy_data()` `pg_query()`
