---
id: "en-php-function-mongodb-driver-session-isintransaction"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::isInTransaction"
title: "Returns whether a multi-document transaction is in progress"
signature: "final public bool MongoDB\\Driver\\Session::isInTransaction()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.isintransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a multi-document transaction is in progress

## Description

```php
final public bool MongoDB\Driver\Session::isInTransaction()
```

Returns whether a multi-document transaction is currently in progress for this session. A transaction is considered "in progress" if it has been started but has not been committed or aborted.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if a transaction is currently in progress for this session, and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::getTransactionState()`
