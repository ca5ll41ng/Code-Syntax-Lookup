---
id: "en-php-function-mongodb-driver-session-advanceclustertime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::advanceClusterTime"
title: "Advances the cluster time for this session"
signature: "final public void MongoDB\\Driver\\Session::advanceClusterTime(array|object $clusterTime)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.advanceclustertime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Advances the cluster time for this session

## Description

```php
final public void MongoDB\Driver\Session::advanceClusterTime(array|object $clusterTime)
```

Advances the cluster time for this session. If the cluster time is less than or equal to the session's current cluster time, this function is a no-op.

By using this method in conjunction with `MongoDB\Driver\Session::advanceOperationTime()` to copy the cluster and operation times from another session, you can ensure that operations in this session are causally consistent with the last operation in the other session.

## Parameters

- **`$clusterTime`** — The cluster time is a document containing a logical timestamp and server signature. Typically, this value will be obtained by calling `MongoDB\Driver\Session::getClusterTime()` on another session object.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::advanceOperationTime()` `MongoDB\Driver\Session::getClusterTime()`
