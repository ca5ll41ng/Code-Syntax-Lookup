---
id: "en-php-function-function-pg-change-password"
language: "php"
lang: "en"
category: "function"
name: "pg_change_password"
title: "Change a PostgreSQL user's password"
signature: "bool pg_change_password(PgSql\\Connection $connection, string $user, string $password)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-change-password.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change a PostgreSQL user's password

## Description

```php
bool pg_change_password(PgSql\Connection $connection, string $user, string $password)
```

`pg_change_password()` changes the password of a PostgreSQL user. This function uses the `PQchangePassword` libpq function which handles password encryption automatically based on the server's settings.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance.
- **`$user`** — The name of the PostgreSQL user whose password to change.
- **`$password`** — The new password.

## Return Values

Returns `true` on success or `false` on failure.

## See Also

 `pg_connect()`
