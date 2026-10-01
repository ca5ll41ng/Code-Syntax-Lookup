---
id: "en-php-function-function-pg-escape-identifier"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "pg_escape_identifier"
title: "Escape an identifier for insertion into a text field"
signature: "string|false pg_escape_identifier([PgSql\\Connection $connection = ...], string $string)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-escape-identifier.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Escape an identifier for insertion into a text field

## Description

```php
string|false pg_escape_identifier([PgSql\Connection $connection = ...], string $string)
```

`pg_escape_identifier()` escapes an identifier (e.g. table, field names) for querying the database. It returns an escaped identifier string for PostgreSQL server. `pg_escape_identifier()` adds double quotes before and after data. Users should not add double quotes. Use of this function is recommended for identifier parameters in query. For SQL literals (i.e. parameters except bytea), `pg_escape_literal()` or `pg_escape_string()` must be used. For bytea type fields, `pg_escape_bytea()` must be used instead.

## Parameters

- **`$connection`** — An `PgSql\Connection` instance. When `$connection` is unspecified, the default connection is used. The default connection is the last connection made by `pg_connect()` or `pg_pconnect()`. > As of PHP 8.1.0, using the default connection is deprecated.
- **`$string`** — A `string` containing text to be escaped.

## Return Values

A `string` containing the escaped data, or `false` on failure.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$connection` parameter expects an `PgSql\Connection` instance now; previously, a `resource` was expected. |

## Examples

**`pg_escape_identifier()` example**

```php


<?php 
  // Connect to the database
  $dbconn = pg_connect('dbname=foo');
  
  // Escape the table name data
  $escaped = pg_escape_identifier($table_name);
  
  // Select rows from $table_name
  pg_query("SELECT * FROM {$escaped};");
?>

    
```

## See Also

`pg_escape_literal()` `pg_escape_bytea()` `pg_escape_string()`
