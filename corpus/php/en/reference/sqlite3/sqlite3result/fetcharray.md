---
id: "en-php-function-sqlite3result-fetcharray"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Result::fetchArray"
title: "Fetches a result row as an associative or numerically indexed array or both"
signature: "public array|false SQLite3Result::fetchArray(int $mode = SQLITE3_BOTH)"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3result.fetcharray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Fetches a result row as an associative or numerically indexed array or both

## Description

```php
public array|false SQLite3Result::fetchArray(int $mode = SQLITE3_BOTH)
```

Fetches a result row as an associative or numerically indexed array or both. By default, fetches as both.

## Parameters

- **`$mode`** — Controls how the next row will be returned to the caller. This value must be one of either `SQLITE3_ASSOC`, `SQLITE3_NUM`, or `SQLITE3_BOTH`. - `SQLITE3_ASSOC`: returns an array indexed by column name as returned in the corresponding result set - `SQLITE3_NUM`: returns an array indexed by column number as returned in the corresponding result set, starting at column 0 - `SQLITE3_BOTH`: returns an array indexed by both column name and number as returned in the corresponding result set, starting at column 0

## Return Values

Returns a result row as an associatively or numerically indexed array or both. Alternately will return `false` if there are no more rows.

The types of the values of the returned array are mapped from SQLite3 types as follows: integers are mapped to `int` if they fit into the range `PHP_INT_MIN`..`PHP_INT_MAX`, and to `string` otherwise. Floats are mapped to `float`, `NULL` values are mapped to `null`, and strings and blobs are mapped to `string`.
