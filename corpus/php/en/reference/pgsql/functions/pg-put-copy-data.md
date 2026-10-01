---
id: "en-php-function-function-pg-put-copy-data"
language: "php"
lang: "en"
category: "function"
name: "pg_put_copy_data"
title: "Send data to the server during a COPY operation"
signature: "int pg_put_copy_data(PgSql\\Connection $connection, string $cmd)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-put-copy-data.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Send data to the server during a COPY operation

## Description

```php
int pg_put_copy_data(PgSql\Connection $connection, string $cmd)
```

Sends data to the server during a `COPY FROM STDIN` operation. A `COPY` command must have been issued via `pg_query()` before calling this function.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$cmd`** — The data to send to the server. A final newline is automatically added if not present. The data must be formatted according to the `COPY` command's format.

## Return Values

Returns `1` on success, `0` if the data could not be queued (only in non-blocking mode), or `-1` on error.

## See Also

 `pg_put_copy_end()` `pg_query()`
