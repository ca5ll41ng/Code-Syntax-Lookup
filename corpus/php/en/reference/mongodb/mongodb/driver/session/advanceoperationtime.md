---
id: "en-php-function-mongodb-driver-session-advanceoperationtime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::advanceOperationTime"
title: "Advances the operation time for this session"
signature: "final public void MongoDB\\Driver\\Session::advanceOperationTime(MongoDB\\BSON\\TimestampInterface $operationTime)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.advanceoperationtime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Advances the operation time for this session

## Description

```php
final public void MongoDB\Driver\Session::advanceOperationTime(MongoDB\BSON\TimestampInterface $operationTime)
```

Advances the operation time for this session. If the operation time is less than or equal to the session's current operation time, this function is a no-op.

By using this method in conjunction with `MongoDB\Driver\Session::advanceClusterTime()` to copy the operation and cluster times from another session, you can ensure that operations in this session are causally consistent with the last operation in the other session.

## Parameters

- **`$operationTime`** — The operation time is a logical timestamp. Typically, this value will be obtained by calling `MongoDB\Driver\Session::getOperationTime()` on another session object.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::advanceClusterTime()` `MongoDB\Driver\Session::getClusterTime()`
