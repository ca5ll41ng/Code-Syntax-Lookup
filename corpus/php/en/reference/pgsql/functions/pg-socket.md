---
id: "en-php-function-function-pg-socket"
language: "php"
lang: "en"
category: "function"
name: "pg_socket"
title: "Get a read only handle to the socket underlying a PostgreSQL connection"
signature: "resource|false pg_socket(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-socket.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get a read only handle to the socket underlying a PostgreSQL connection

## Description

```php
resource|false pg_socket(PgSql\Connection $connection)
```

`pg_socket()` returns a read only `resource` corresponding to the socket underlying the given PostgreSQL connection.

> This function is currently not documented; only its argument list is available.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.

## Return Values

A socket resource on success or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |
