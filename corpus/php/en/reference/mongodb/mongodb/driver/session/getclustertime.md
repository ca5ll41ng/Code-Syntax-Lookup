---
id: "en-php-function-mongodb-driver-session-getclustertime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::getClusterTime"
title: "Returns the cluster time for this session"
signature: "final public object|null MongoDB\\Driver\\Session::getClusterTime()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.getclustertime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the cluster time for this session

## Description

```php
final public object|null MongoDB\Driver\Session::getClusterTime()
```

Returns the cluster time for this session. If the session has not been used for any operation and `MongoDB\Driver\Session::advanceClusterTime()` has not been called, the cluster time will be `null`.

## Parameters

This function has no parameters.

## Return Values

Returns the cluster time for this session, or `null` if the session has no cluster time.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::advanceClusterTime()`
