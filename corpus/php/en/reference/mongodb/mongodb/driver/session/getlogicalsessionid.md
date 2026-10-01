---
id: "en-php-function-mongodb-driver-session-getlogicalsessionid"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::getLogicalSessionId"
title: "Returns the logical session ID for this session"
signature: "final public object MongoDB\\Driver\\Session::getLogicalSessionId()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.getlogicalsessionid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the logical session ID for this session

## Description

```php
final public object MongoDB\Driver\Session::getLogicalSessionId()
```

Returns the logical session ID for this session, which may be used to identify this session's operations on the server.

## Parameters

This function has no parameters.

## Return Values

Returns the logical session ID for this session.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
