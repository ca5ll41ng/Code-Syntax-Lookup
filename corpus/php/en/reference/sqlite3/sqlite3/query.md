---
id: "en-php-function-sqlite3-query"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::query"
title: "Executes an SQL query"
signature: "public SQLite3Result|false SQLite3::query(string $query)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.query.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Executes an SQL query

## Description

```php
public SQLite3Result|false SQLite3::query(string $query)
```

Executes an SQL query, returning an `SQLite3Result` object. If the query does not yield a result (such as DML statements) the returned `SQLite3Result` object is not really usable. Use `SQLite3::exec()` for such queries instead.

## Parameters

- **`$query`** — The SQL query to execute.

## Return Values

Returns an `SQLite3Result` object, or `false` on failure.

## Examples

**`SQLite3::query()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');

$results = $db->query('SELECT bar FROM foo');
while ($row = $results->fetchArray()) {
    var_dump($row);
}
?>

    
```
