---
id: "en-php-function-sqlite3stmt-busy"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::busy"
title: "Returns whether the statement has been fetched but not yet completed"
signature: "public bool SQLite3Stmt::busy()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.busy.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the statement has been fetched but not yet completed

## Description

```php
public bool SQLite3Stmt::busy()
```

Returns whether the statement is busy, i.e. it has been started with `SQLite3Stmt::execute()` and has rows remaining to be fetched, but has not yet been completed or reset.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the statement has been executed and still has rows to fetch, `false` otherwise.

## Changelog

|  |  |
| --- | --- |
| 8.5.0 | This method was added. |

## See Also

 `SQLite3Stmt::execute()` `SQLite3Stmt::reset()` `SQLite3Stmt::close()`
