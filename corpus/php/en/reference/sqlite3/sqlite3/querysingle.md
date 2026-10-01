---
id: "en-php-function-sqlite3-querysingle"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::querySingle"
title: "Executes a query and returns a single result"
signature: "public mixed SQLite3::querySingle(string $query, bool $entireRow = false)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.querysingle.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Executes a query and returns a single result

## Description

```php
public mixed SQLite3::querySingle(string $query, bool $entireRow = false)
```

Executes a query and returns a single result.

## Parameters

- **`$query`** — The SQL query to execute.
- **`$entireRow`** — By default, `querySingle()` returns the value of the first column returned by the query. If `$entireRow` is `true`, then it returns an array of the entire first row.

## Return Values

Returns the value of the first column of results or an array of the entire first row (if `$entireRow` is `true`).

If the query is valid but no results are returned, then `null` will be returned if `$entireRow` is `false`, otherwise an empty array is returned.

Invalid or failing queries will return `false`.

## Examples

**`SQLite3::querySingle()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');

var_dump($db->querySingle('SELECT username FROM user WHERE userid=1'));
print_r($db->querySingle('SELECT username, email FROM user WHERE userid=1', true));
?>

    
```

The above example will output something similar to:

```text


string(5) "Scott"
Array
(
    [username] => Scott
    [email] => scott@example.com
)

    
```
