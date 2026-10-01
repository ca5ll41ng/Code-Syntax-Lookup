---
id: "en-php-function-sqlite3-lasterrorcode"
language: "php"
lang: "en"
category: "function"
name: "SQLite3::lastErrorCode"
title: "Returns the numeric result code of the most recent failed SQLite request"
signature: "public int SQLite3::lastErrorCode()"
module: "sqlite3"
source_url: "https://www.php.net/manual/en/sqlite3.lasterrorcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the numeric result code of the most recent failed SQLite request

## Description

```php
public int SQLite3::lastErrorCode()
```

Returns the numeric result code of the most recent failed SQLite request.

## Parameters

This function has no parameters.

## Return Values

Returns an integer value representing the numeric result code of the most recent failed SQLite request.

## See Also

 `SQLite3::lastExtendedErrorCode()` `SQLite3::enableExtendedResultCodes()` `SQLite3::lastErrorMsg()`
