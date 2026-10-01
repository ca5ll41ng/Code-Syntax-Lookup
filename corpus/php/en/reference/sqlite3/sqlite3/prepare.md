---
id: "en-php-function-sqlite3-prepare"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::prepare"
title: "Prepares an SQL statement for execution"
signature: "public SQLite3Stmt|false SQLite3::prepare(string $query)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.prepare.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Prepares an SQL statement for execution

## Description

```php
public SQLite3Stmt|false SQLite3::prepare(string $query)
```

Prepares an SQL statement for execution and returns an `SQLite3Stmt` object.

## Parameters

- **`$query`** — The SQL query to prepare.

## Return Values

Returns an `SQLite3Stmt` object on success or `false` on failure.

## Examples

**`SQLite3::prepare()` example**

```php


<?php
$db = new SQLite3('mysqlitedb.db');

$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');
$db->exec("INSERT INTO foo (id, bar) VALUES (1, 'This is a test')");

$stmt = $db->prepare('SELECT bar FROM foo WHERE id=:id');
$stmt->bindValue(':id', 1, SQLITE3_INTEGER);

$result = $stmt->execute();
var_dump($result->fetchArray());
?>

    
```

## See Also

 `SQLite3Stmt::paramCount()` `SQLite3Stmt::bindValue()` `SQLite3Stmt::bindParam()`
