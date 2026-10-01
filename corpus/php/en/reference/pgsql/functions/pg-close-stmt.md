---
id: "en-php-function-function-pg-close-stmt"
language: "php"
lang: "en"
category: "function"
name: "pg_close_stmt"
title: "Closes a prepared statement"
signature: "PgSql\\Result|false pg_close_stmt(PgSql\\Connection $connection, string $statement_name)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-close-stmt.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes a prepared statement

## Description

```php
PgSql\Result|false pg_close_stmt(PgSql\Connection $connection, string $statement_name)
```

Closes a prepared statement on the server, freeing its resources and making its name available for reuse. It is an alternative to issuing a `DEALLOCATE` SQL command, which does not allow the statement name to be reused afterwards.

This function is only available if PHP has been built against libpq 17 or later.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$statement_name`** — The name of the prepared statement to close.

## Return Values

A `PgSql\Result` instance on success, or `false` on failure.

## Errors/Exceptions

Throws a ValueError if `$statement_name` is empty or contains any null bytes.

## See Also

 `pg_prepare()` `pg_execute()`
