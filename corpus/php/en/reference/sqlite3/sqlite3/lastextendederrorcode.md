---
id: "en-php-function-sqlite3-lastextendederrorcode"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::lastExtendedErrorCode"
title: "Returns the numeric extended result code of the most recent failed SQLite request"
signature: "public int SQLite3::lastExtendedErrorCode()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.lastextendederrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the numeric extended result code of the most recent failed SQLite request

## Description

```php
public int SQLite3::lastExtendedErrorCode()
```

Returns the numeric extended result code of the most recent failed SQLite request. Unlike `SQLite3::lastErrorCode()`, this method always returns the extended result code, whether or not extended result codes have been enabled with `SQLite3::enableExtendedResultCodes()`.

## Parameters

This function has no parameters.

## Return Values

Returns an integer value representing the numeric extended result code of the most recent failed SQLite request.

## See Also

 `SQLite3::enableExtendedResultCodes()` `SQLite3::lastErrorCode()` `SQLite3::lastErrorMsg()`
