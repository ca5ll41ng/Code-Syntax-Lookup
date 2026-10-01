---
id: "en-php-function-mongodb-driver-session-gettransactionstate"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::getTransactionState"
title: "Returns the current transaction state for this session"
signature: "final public string MongoDB\\Driver\\Session::getTransactionState()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.gettransactionstate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current transaction state for this session

## Description

```php
final public string MongoDB\Driver\Session::getTransactionState()
```

Returns the transaction state for this session.

## Parameters

This function has no parameters.

## Return Values

Returns the current transaction state for this session.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::isInTransaction()` `MongoDB\Driver\Session::getTransactionOptions()`
