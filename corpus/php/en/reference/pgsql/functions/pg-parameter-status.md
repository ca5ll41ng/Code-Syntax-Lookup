---
id: "en-php-function-function-pg-parameter-status"
language: "php"
lang: "en"
category: "function"
name: "pg_parameter_status"
title: "Looks up a current parameter setting of the server"
signature: "string|false pg_parameter_status([PgSql\\Connection $connection = ...], string $name)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-parameter-status.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Looks up a current parameter setting of the server

## Description

```php
string|false pg_parameter_status([PgSql\Connection $connection = ...], string $name)
```

Looks up a current parameter setting of the server.

Certain parameter values are reported by the server automatically at connection startup or whenever their values change. `pg_parameter_status()` can be used to interrogate these settings. It returns the current value of a parameter if known, or `false` if the parameter is not known.

Parameters reported by the server include `server_version`, `server_encoding`, `client_encoding`, `is_superuser`, `session_authorization`, `DateStyle`, `TimeZone`, and `integer_datetimes`. Note that `server_version`, `server_encoding` and `integer_datetimes` cannot change after PostgreSQL startup.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$name`** — Possible `$name` values include `server_version`, `server_encoding`, `client_encoding`, `is_superuser`, `session_authorization`, `DateStyle`, `TimeZone`, and `integer_datetimes`. Note that this value is case-sensitive.

## Return Values

A `string` containing the value of the parameter, `false` on failure or invalid `$name`.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**`pg_parameter_status()` example**

```php


<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  echo "Server encoding: ", pg_parameter_status($dbconn, "server_encoding");
?>

    
```

The above example will output:

```text


Server encoding: SQL_ASCII

    
```
