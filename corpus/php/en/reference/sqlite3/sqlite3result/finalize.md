---
id: "en-php-function-sqlite3result-finalize"
language: "php"
lang: "en"
category: "function"
name: "SQLite3Result::finalize"
title: "Closes the result set"
signature: "public true SQLite3Result::finalize()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3result.finalize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Closes the result set

## Description

```php
public true SQLite3Result::finalize()
```

Closes the result set.

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
