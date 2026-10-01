---
id: "en-php-function-sqlite3stmt-readonly"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::readOnly"
title: "Returns whether a statement is definitely read only"
signature: "public bool SQLite3Stmt::readOnly()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.readonly.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a statement is definitely read only

## Description

```php
public bool SQLite3Stmt::readOnly()
```

Returns whether a statement is definitely read only. A statement is considered read only, if it makes no *direct* changes to the content of the database file. Note that user defined SQL functions might change the database *indirectly* as a side effect.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if a statement is definitely read only, `false` otherwise.
