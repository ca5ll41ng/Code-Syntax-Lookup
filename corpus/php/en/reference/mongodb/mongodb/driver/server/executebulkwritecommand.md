---
id: "en-php-function-mongodb-driver-server-executebulkwritecommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::executeBulkWriteCommand"
title: "Execute write operations on this server using the bulkWrite command"
signature: "final public MongoDB\\Driver\\BulkWriteCommandResult MongoDB\\Driver\\Server::executeBulkWriteCommand(MongoDB\\Driver\\BulkWriteCommand $bulk, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.executebulkwritecommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute write operations on this server using the bulkWrite command

## Description

```php
final public MongoDB\Driver\BulkWriteCommandResult MongoDB\Driver\Server::executeBulkWriteCommand(MongoDB\Driver\BulkWriteCommand $bulk, array|null $options = null)
```

Executes one or more write operations on this server using the [bulkWrite](bulkWrite) command introduced in MongoDB 8.0.

A `MongoDB\Driver\BulkWriteCommand` can be constructed with one or more write operations of varying types (e.g. inserts, updates, and deletes). Each write operation may target a different collection.

The default value for the `"writeConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

## Parameters

- **`$bulk` (`MongoDB\Driver\BulkWriteCommand`)** — The write(s) to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | session | `MongoDB\Driver\Session` | A session to associate with the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |

## Return Values

Returns `MongoDB\Driver\BulkWriteCommandResult` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` does not contain any write operations. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` has already been executed. `MongoDB\Driver\BulkWriteCommand` objects may not be executed multiple times. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used in combination with an unacknowledged write concern. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\BulkWriteCommandException` on any write failure (e.g. command failure, write or write concern error) Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## See Also

 `MongoDB\Driver\BulkWriteCommand` `MongoDB\Driver\BulkWriteCommandResult` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\Manager::executeBulkWriteCommand()`
