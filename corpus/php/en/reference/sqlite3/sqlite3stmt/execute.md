---
id: "en-php-function-sqlite3stmt-execute"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::execute"
title: "Executes a prepared statement and returns a result set object"
signature: "public SQLite3Result|false SQLite3Stmt::execute()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.execute.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Executes a prepared statement and returns a result set object

## Description

```php
public SQLite3Result|false SQLite3Stmt::execute()
```

Executes a prepared statement and returns a result set object.

> Result set objects retrieved by calling this method on the same statement object are not independent, but rather share the same underlying structure. Therefore it is recommended to call `SQLite3Result::finalize()`, before calling `SQLite3Stmt::execute()` on the same statement object again.

## Parameters

This function has no parameters.

## Return Values

Returns an `SQLite3Result` object on successful execution of the prepared statement, `false` on failure.

## See Also

 `SQLite3::prepare()` `SQLite3Stmt::bindValue()` `SQLite3Stmt::bindParam()`
