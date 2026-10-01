---
id: "en-php-function-mongodb-driver-session-starttransaction"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::startTransaction"
title: "Starts a transaction"
signature: "final public void MongoDB\\Driver\\Session::startTransaction(array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.starttransaction.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Starts a transaction

## Description

```php
final public void MongoDB\Driver\Session::startTransaction(array|null $options = null)
```

Starts a multi-document transaction associated with the session. At any given time, you can have at most one open transaction for a session. After starting a transaction, the session object must be passed to each operation via the `"session"` option (e.g. `MongoDB\Driver\Manager::executeBulkWrite()`) in order to associate that operation with the transaction.

Transactions can be committed through `MongoDB\Driver\Session::commitTransaction()`, and aborted with `MongoDB\Driver\Session::abortTransaction()`. Transactions are also automatically aborted when the session is closed from garbage collection or by explicitly calling `MongoDB\Driver\Session::endSession()`.

## Parameters

- **`$options`** — Options can be passed as argument to this method. Each element in this options array overrides the corresponding option from the `"defaultTransactionOptions"` option, if set when starting the session with `MongoDB\Driver\Manager::startSession()`. — | Option | Type | Description | | --- | --- | --- | | maxCommitTimeMS | integer | The maximum amount of time in milliseconds to allow a single `commitTransaction` command to run. If specified, `maxCommitTimeMS` must be a signed 32-bit integer greater than or equal to zero. | | readConcern | `MongoDB\Driver\ReadConcern` | A read concern to apply to the operation. This option is available in MongoDB 3.2+ and will result in an exception at execution time if specified for an older server version. | | readPreference | `MongoDB\Driver\ReadPreference` | A read preference to use for selecting a server for the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\CommandException` if the transaction could not be started because of a server-side problem (e.g. a lock could not be obtained). Throws `MongoDB\Driver\Exception\RuntimeException` if the transaction could not be started (e.g. a transaction was already started). 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.6.0 | The `"maxCommitTimeMS"` option was added. |

## See Also

 `MongoDB\Driver\Manager::startSession()` `MongoDB\Driver\Session::commitTransaction()` `MongoDB\Driver\Session::abortTransaction()`
