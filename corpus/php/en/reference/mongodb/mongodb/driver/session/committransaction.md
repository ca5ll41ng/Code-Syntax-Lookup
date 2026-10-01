---
id: "en-php-function-mongodb-driver-session-committransaction"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::commitTransaction"
title: "Commits a transaction"
signature: "final public void MongoDB\\Driver\\Session::commitTransaction()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.committransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Commits a transaction

## Description

```php
final public void MongoDB\Driver\Session::commitTransaction()
```

Saves the changes made by the operations in the multi-document transaction and ends the transaction. Until the commit, none of the data changes made from within the transaction are visible outside the transaction.

## Parameters

This function has no parameters.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\CommandException` if the server could not commit the transaction (e.g. due to conflicts, network issues). In case the exception's `MongoDB\Driver\Exception\CommandException::getResultDocument()` has a `"errorLabels"` element, and this array contains a `"TransientTransactionError"` or `"UnknownTransactionCommitResult"` value, it is safe to re-try the *whole* transaction. In newer versions of the extension, `MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()` should be used to test for this situation instead. Throws `MongoDB\Driver\Exception\RuntimeException` if the transaction could not be committed (e.g. a transaction was not started). 

## See Also

 `MongoDB\Driver\Manager::startSession()` `MongoDB\Driver\Session::abortTransaction()` `MongoDB\Driver\Session::startTransaction()` `MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()`
