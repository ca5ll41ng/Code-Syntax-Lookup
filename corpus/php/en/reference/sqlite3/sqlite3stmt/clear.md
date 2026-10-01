---
id: "en-php-function-sqlite3stmt-clear"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::clear"
title: "Clears all current bound parameters"
signature: "public bool SQLite3Stmt::clear()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.clear.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Clears all current bound parameters

## Description

```php
public bool SQLite3Stmt::clear()
```

Clears all current bound parameters (sets them to `null`).

> This method needs to be used with `SQLite3Stmt::reset()`. If used alone, any call to `SQLite3Stmt::bindValue()` or `SQLite3Stmt::bindParam()` will be of no effect and all bound parameters will have the `null` value.

## Parameters

This function has no parameters.

## Return Values

Returns `true` on successful clearing of bound parameters, `false` on failure.
