---
id: "en-php-function-function-pg-fetch-all-columns"
language: "php"
lang: "en"
category: "function"
name: "pg_fetch_all_columns"
title: "Fetches all rows in a particular result column as an array"
signature: "array pg_fetch_all_columns(PgSql\\Result $result, int $field = 0)"
module: "pgsql"
source_url: "https://www.php.net/manual/en/function.pg-fetch-all-columns.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetches all rows in a particular result column as an array

## Description

```php
array pg_fetch_all_columns(PgSql\Result $result, int $field = 0)
```

`pg_fetch_all_columns()` returns an array that contains all rows (records) in a particular column of the `PgSql\Result` instance.

> This function sets NULL fields to the PHP `null` value.

## Parameters

- **`$result`** — An `PgSql\Result` instance, returned by `pg_query()`, `pg_query_params()` or `pg_execute()`(among others).
- **`$field`** — Column number. Defaults to the first column if not specified.

## Return Values

An `array` with all values in the result column.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | The `$result` parameter expects an `PgSql\Result` instance now; previously, a `resource` was expected. |

## Examples

**`pg_fetch_all_columns()` example**

```php


<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT title, name, address FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

// Get an array of all author names
$arr = pg_fetch_all_columns($result, 1);

var_dump($arr);

?>

    
```

## See Also

`pg_fetch_all()`
