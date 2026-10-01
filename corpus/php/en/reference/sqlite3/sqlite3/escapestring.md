---
id: "en-php-function-sqlite3-escapestring"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::escapeString"
title: "Returns a string that has been properly escaped"
signature: "public static string SQLite3::escapeString(string $string)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.escapestring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string that has been properly escaped

## Description

```php
public static string SQLite3::escapeString(string $string)
```

Returns a string that has been properly escaped for safe inclusion in an SQL statement.

> This function is not (yet) binary safe!

To properly handle BLOB fields which may contain NUL characters, use `SQLite3Stmt::bindParam()` instead.

## Parameters

- **`$string`** — The string to be escaped.

## Return Values

Returns a properly escaped string that may be used safely in an SQL statement.

## Notes

> `addslashes()` should *NOT* be used to quote your strings for SQLite queries; it will lead to strange results when retrieving your data.
