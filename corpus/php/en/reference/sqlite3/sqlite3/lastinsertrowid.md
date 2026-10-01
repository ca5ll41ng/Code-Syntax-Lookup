---
id: "en-php-function-sqlite3-lastinsertrowid"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::lastInsertRowID"
title: "Returns the row ID of the most recent INSERT into the database"
signature: "public int SQLite3::lastInsertRowID()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.lastinsertrowid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the row ID of the most recent INSERT into the database

## Description

```php
public int SQLite3::lastInsertRowID()
```

Returns the row ID of the most recent INSERT into the database.

## Parameters

This function has no parameters.

## Return Values

Returns the row ID of the most recent INSERT into the database. If no successful INSERTs into rowid tables have ever occurred on this database connection, then `SQLite3::lastInsertRowID()` returns `0`.
