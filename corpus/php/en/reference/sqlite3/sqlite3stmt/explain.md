---
id: "en-php-function-sqlite3stmt-explain"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::explain"
title: "Returns the explain mode of the statement"
signature: "public int SQLite3Stmt::explain()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.explain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the explain mode of the statement

## Description

```php
public int SQLite3Stmt::explain()
```

Returns the explain mode currently set on the statement with `SQLite3Stmt::setExplain()`.

## Parameters

This function has no parameters.

## Return Values

Returns one of `SQLite3Stmt::EXPLAIN_MODE_PREPARED`, `SQLite3Stmt::EXPLAIN_MODE_EXPLAIN`, or `SQLite3Stmt::EXPLAIN_MODE_EXPLAIN_QUERY_PLAN`.

## See Also

 `SQLite3Stmt::setExplain()` `SQLite3Stmt::execute()` `SQLite3Stmt::reset()`
