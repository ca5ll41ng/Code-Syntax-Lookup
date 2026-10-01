---
id: "en-php-function-mongodb-driver-session-endsession"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::endSession"
title: "Terminates a session"
signature: "final public void MongoDB\\Driver\\Session::endSession()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.endsession.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Terminates a session

## Description

```php
final public void MongoDB\Driver\Session::endSession()
```

This method closes an existing session. If a transaction was associated with this session, the transaction will be aborted. After calling this method, applications should not invoke other methods on the session.

> Sessions are also closed during garbage collection. It should not be necessary to call this method under normal circumstances.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Manager::startSession()` `MongoDB\Driver\Session::abortTransaction()` `MongoDB\Driver\Session::commitTransaction()` `MongoDB\Driver\Session::startTransaction()`
