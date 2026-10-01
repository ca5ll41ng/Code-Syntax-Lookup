---
id: "en-php-function-function-pg-consume-input"
language: "php"
lang: "en"
category: "function"
name: "pg_consume_input"
title: "Reads input on the connection"
signature: "bool pg_consume_input(PgSql\\Connection $connection)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-consume-input.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Reads input on the connection

## Description

```php
bool pg_consume_input(PgSql\Connection $connection)
```

`pg_consume_input()` consumes any input waiting to be read from the database server.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.

## Return Values

`true` if no error occurred, or `false` if there was an error. Note that `true` does not necessarily indicate that input was waiting to be read.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |
