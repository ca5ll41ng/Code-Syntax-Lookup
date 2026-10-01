---
id: "en-php-function-mongodb-driver-session-gettransactionoptions"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::getTransactionOptions"
title: "Returns options for the currently running transaction"
signature: "final public array|null MongoDB\\Driver\\Session::getTransactionOptions()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.gettransactionoptions.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns options for the currently running transaction

## Description

```php
final public array|null MongoDB\Driver\Session::getTransactionOptions()
```

Returns options for the currently running transaction.

## Parameters

This function has no parameters.

## Return Values

Returns a `array` containing current transaction options, or `null` if no transaction is running.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Session::getTransactionState()`
