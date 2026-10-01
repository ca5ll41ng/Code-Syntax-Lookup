---
id: "en-php-function-function-pg-escape-literal"
language: "php"
lang: "en"
category: "function"
danger: {"type":"sanitizer"}
name: "pg_escape_literal"
title: "Escape a literal for insertion into a text field"
signature: "string|false pg_escape_literal([PgSql\\Connection $connection = ...], string $string)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-escape-literal.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Escape a literal for insertion into a text field

## Description

```php
string|false pg_escape_literal([PgSql\Connection $connection = ...], string $string)
```

`pg_escape_literal()` escapes a literal for querying the PostgreSQL database. It returns an escaped literal in the PostgreSQL format. `pg_escape_literal()` adds quotes before and after data. Users should not add quotes. Use of this function is recommended instead of `pg_escape_string()`. If the type of the column is bytea, `pg_escape_bytea()` must be used instead. For escaping identifiers (e.g. table, field names), `pg_escape_identifier()` must be used.

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

**`pg_escape_literal()` example**

```php


<?php 
  // Connect to the database
  $dbconn = pg_connect('dbname=foo');
  
  // Read in a text file (containing apostrophes and backslashes)
  $data = file_get_contents('letter.txt');
  
  // Escape the text data
  $escaped = pg_escape_literal($data);
  
  // Insert it into the database. Note that no quotes around {$escaped}
  pg_query("INSERT INTO correspondence (name, data) VALUES ('My letter', {$escaped})");
?>

    
```

## See Also

`pg_escape_identifier()` `pg_escape_bytea()` `pg_escape_string()`
