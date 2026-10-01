---
id: "en-php-function-sqlite3result-columntype"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Result::columnType"
title: "Returns the type of the nth column"
signature: "public int|false SQLite3Result::columnType(int $column)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3result.columntype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the type of the nth column

## Description

```php
public int|false SQLite3Result::columnType(int $column)
```

Returns the type of the column identified by `$column`.

## Parameters

- **`$column`** — The numeric zero-based index of the column.

## Return Values

Returns the data type index of the column identified by `$column` (one of `SQLITE3_INTEGER`, `SQLITE3_FLOAT`, `SQLITE3_TEXT`, `SQLITE3_BLOB`, or `SQLITE3_NULL`), or `false` if the column does not exist.
