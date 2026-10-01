---
id: "en-php-function-sqlite3-exec"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::exec"
title: "Executes a result-less query against a given database"
signature: "public bool SQLite3::exec(string $query)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.exec.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Executes a result-less query against a given database

## Description

```php
public bool SQLite3::exec(string $query)
```

Executes a result-less query against a given database.

> SQLite3 may need to create [temporary files]() during the execution of queries, so the respective directories may have to be writable.

## Parameters

- **`$query`** — The SQL query to execute (typically an INSERT, UPDATE, or DELETE query).

## Return Values

Returns `true` if the query succeeded, `false` on failure.

## Examples

**`SQLite3::exec()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');

$db->exec('CREATE TABLE bar (bar TEXT)');
?>

    
```
