---
id: "en-php-function-sqlite3stmt-getsql"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::getSQL"
title: "Get the SQL of the statement"
signature: "public string|false SQLite3Stmt::getSQL(bool $expand = false)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.getsql.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the SQL of the statement

## Description

```php
public string|false SQLite3Stmt::getSQL(bool $expand = false)
```

Retrieves the SQL of the prepared statement. If `$expand` is `false`, the unmodified SQL is retrieved. If `$expand` is `true`, all query parameters are replaced with their bound values, or with an SQL `NULL`, if not already bound.

## Parameters

- **`$expand`** — Whether to retrieve the expanded SQL. Passing `true` is only supported as of libsqlite 3.14.

## Return Values

Returns the SQL of the prepared statement, or `false` on failure.

## Errors/Exceptions

If `$expand` is `true`, but the libsqlite version is less than 3.14, an error of level `E_WARNING` or an `Exception` is issued, according to `SQLite3::enableExceptions()`.

## Examples

**Inspecting the expanded SQL**

```php


<?php
$db = new SQLite3(':memory:');
$stmt = $db->prepare("SELECT :a, ?, :c");
$stmt->bindValue(':a', 'foo');
$answer = 42;
$stmt->bindParam(2, $answer);
var_dump($stmt->getSQL(true));
?>

   
```

The above example will output something similar to:

```text


string(24) "SELECT 'foo', '42', NULL"

   
```
