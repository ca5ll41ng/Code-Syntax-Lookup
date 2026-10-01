---
id: "en-php-function-mongodb-driver-session-getoperationtime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::getOperationTime"
title: "Returns the operation time for this session"
signature: "final public MongoDB\\BSON\\Timestamp|null MongoDB\\Driver\\Session::getOperationTime()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.getoperationtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the operation time for this session

## Description

```php
final public MongoDB\BSON\Timestamp|null MongoDB\Driver\Session::getOperationTime()
```

Returns the operation time for this session. If the session has not been used for any operation and `MongoDB\Driver\Session::advanceOperationTime()` has not been called, the operation time will be `null`

## Parameters

This function has no parameters.

## Return Values

Returns the operation time for this session, or `null` if the session has no operation time.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::advanceOperationTime()`
