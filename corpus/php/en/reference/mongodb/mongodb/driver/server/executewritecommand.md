---
id: "en-php-function-mongodb-driver-server-executewritecommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::executeWriteCommand"
title: "Execute a database command that writes on this server"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Server::executeWriteCommand(string $db, MongoDB\\Driver\\Command $command, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.executewritecommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database command that writes on this server

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Server::executeWriteCommand(string $db, MongoDB\Driver\Command $command, array|null $options = null)
```

Executes the command on this server.

This method will apply logic that is specific to commands that write (e.g. [drop](reference/command/drop/)). The default value for the `"writeConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

> This method is not intended to be used to execute [insert](reference/command/insert/), [update](reference/command/update/), or [delete](reference/command/delete/) commands. Users are encouraged to use `MongoDB\Driver\Server::executeBulkWrite()` for those operations.

## Parameters

- **`$db` (`string`)** — The name of the database on which to execute the command.
- **`$command` (`MongoDB\Driver\Command`)** — The command to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | session | `MongoDB\Driver\Session` | A session to associate with the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |
  > If you are using a `"session"` which has a transaction in progress, you cannot specify a `"readConcern"` or `"writeConcern"` option. This will result in an `MongoDB\Driver\Exception\InvalidArgumentException` being thrown. Instead, you should set these two options when you create the transaction with `MongoDB\Driver\Session::startTransaction()`.



## Return Values

Returns `MongoDB\Driver\Cursor` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used with an associated transaction in combination with a `"readConcern"` or `"writeConcern"` option. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used in combination with an unacknowledged write concern. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors (e.g. invalid command). 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.4.4 | `MongoDB\Driver\Exception\InvalidArgumentException` will be thrown if the `"session"` option is used in combination with an unacknowledged write concern. |

## Notes

> It is the caller's responsibility to ensure that the server is capable of executing the write operation. For example, executing a write operation on a secondary (excluding its "local" database) will fail.

## See Also

 `MongoDB\Driver\Command` `MongoDB\Driver\Cursor` `MongoDB\Driver\Server::executeCommand()` `MongoDB\Driver\Server::executeReadCommand()` `MongoDB\Driver\Server::executeReadWriteCommand()` `MongoDB\Driver\Manager::executeWriteCommand()`
