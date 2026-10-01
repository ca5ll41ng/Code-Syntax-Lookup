---
id: "en-php-function-mongodb-driver-session-aborttransaction"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::abortTransaction"
title: "Aborts a transaction"
signature: "final public void MongoDB\\Driver\\Session::abortTransaction()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.aborttransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Aborts a transaction

## Description

```php
final public void MongoDB\Driver\Session::abortTransaction()
```

Terminates the multi-document transaction and rolls back any data changes made by the operations within the transaction. That is, the transaction ends without saving any of the changes made by the operations in the transaction.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\RuntimeException` if the transaction could not be aborted (e.g. a transaction was not started). 

## See Also

 `MongoDB\Driver\Manager::startSession()` `MongoDB\Driver\Session::commitTransaction()` `MongoDB\Driver\Session::startTransaction()`
