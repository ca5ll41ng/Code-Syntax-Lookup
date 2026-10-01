---
id: "en-php-function-sqlite3stmt-reset"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::reset"
title: "Resets the prepared statement"
signature: "public bool SQLite3Stmt::reset()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.reset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Resets the prepared statement

## Description

```php
public bool SQLite3Stmt::reset()
```

Resets the prepared statement to its state prior to execution. All bindings remain intact after reset.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the statement is successfully reset, or `false` on failure.
