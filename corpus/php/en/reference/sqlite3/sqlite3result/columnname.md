---
id: "en-php-function-sqlite3result-columnname"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Result::columnName"
title: "Returns the name of the nth column"
signature: "public string|false SQLite3Result::columnName(int $column)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3result.columnname.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the name of the nth column

## Description

```php
public string|false SQLite3Result::columnName(int $column)
```

Returns the name of the column specified by the `$column`. Note that the name of a result column is the value of the `AS` clause for that column, if there is an `AS` clause. If there is no `AS` clause then the name of the column is unspecified and may change from one release of libsqlite3 to the next.

## Parameters

- **`$column`** — The numeric zero-based index of the column.

## Return Values

Returns the `string` name of the column identified by `$column`, or `false` if the column does not exist.
