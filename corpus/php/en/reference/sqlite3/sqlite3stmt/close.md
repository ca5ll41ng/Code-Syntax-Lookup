---
id: "en-php-function-sqlite3stmt-close"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Stmt::close"
title: "Closes the prepared statement"
signature: "public true SQLite3Stmt::close()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3stmt.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes the prepared statement

## Description

```php
public true SQLite3Stmt::close()
```

Closes the prepared statement.

> Note that all `SQLite3Result`s that have been retrieved by executing this statement will be invalidated when the statement is closed.

## Parameters

This function has no parameters.

## Return Values

Always returns `true`.

## Errors/Exceptions

An Error is thrown if the method is called on an uninitialized object.

## Changelog

|  |  |
| --- | --- |
| 8.1.0 | This method now throws an Error exception if the object is not correct initialized. Previously, it returned `false`. |
