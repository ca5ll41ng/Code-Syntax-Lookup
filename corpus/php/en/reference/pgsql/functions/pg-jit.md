---
id: "en-php-function-function-pg-jit"
language: "php"
lang: "en"
category: "function"
name: "pg_jit"
title: "Returns the JIT information of the server"
signature: "array pg_jit(PgSql\\Connection|null $connection = null)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-jit.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the JIT information of the server

## Description

```php
array pg_jit(PgSql\Connection|null $connection = null)
```

`pg_jit()` returns an array with the JIT (Just-In-Time compilation) information of the PostgreSQL server.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is `null`, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.

## Return Values

Returns an `array` containing the JIT information of the server.

## See Also

 `pg_version()`
