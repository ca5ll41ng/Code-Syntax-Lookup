---
id: "en-php-function-sqlite3stmt-setexplain"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::setExplain"
title: "Changes the explain mode of the statement"
signature: "public bool SQLite3Stmt::setExplain(int $mode)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.setexplain.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Changes the explain mode of the statement

## Description

```php
public bool SQLite3Stmt::setExplain(int $mode)
```

Changes the explain mode of the statement, so that it behaves as if its SQL was prefixed with `EXPLAIN` or `EXPLAIN QUERY PLAN`, or as an ordinary statement again.

## Parameters

- **`$mode`** — One of `SQLite3Stmt::EXPLAIN_MODE_PREPARED`, `SQLite3Stmt::EXPLAIN_MODE_EXPLAIN`, or `SQLite3Stmt::EXPLAIN_MODE_EXPLAIN_QUERY_PLAN`.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

A ValueError is thrown if `$mode` is not one of the `SQLite3Stmt::EXPLAIN_MODE_*` constants.

## See Also

 `SQLite3Stmt::explain()` `SQLite3Stmt::execute()`
