---
id: "en-php-function-mongodb-driver-server-executecommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::executeCommand"
title: "Execute a database command on this server"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Server::executeCommand(string $db, MongoDB\\Driver\\Command $command, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.executecommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database command on this server

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Server::executeCommand(string $db, MongoDB\Driver\Command $command, array|null $options = null)
```

Executes the command on this server.

This method applies no special logic to the command. The Default values for the `"readPreference"`, `"readConcern"`, and `"writeConcern"` options will be inferred from an active transaction (indicated by the `"session"` option). If there is no active transaction, a primary read preference will be used for server selection.

Default values will *not* be inferred from the connection URI. Users are therefore encouraged to use specific read and/or write command methods if possible.

> The `"readPreference"` option does not control the server to which the driver issues the operation; it will always be executed on this server object. Instead, it may be used when issuing the operation to a secondary (from a replica set connection, not standalone) or mongos node to ensure that the driver sets the wire protocol accordingly or adds the read preference to the operation, respectively.

## Parameters

- **`$db` (`string`)** — The name of the database on which to execute the command.
- **`$command` (`MongoDB\Driver\Command`)** — The command to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | readConcern | `MongoDB\Driver\ReadConcern` | A read concern to apply to the operation. This option is available in MongoDB 3.2+ and will result in an exception at execution time if specified for an older server version. | | readPreference | `MongoDB\Driver\ReadPreference` | A read preference to use for selecting a server for the operation. | | session | `MongoDB\Driver\Session` | A session to associate with the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |
  > If you are using a `"session"` which has a transaction in progress, you cannot specify a `"readConcern"` or `"writeConcern"` option. This will result in an `MongoDB\Driver\Exception\InvalidArgumentException` being thrown. Instead, you should set these two options when you create the transaction with `MongoDB\Driver\Session::startTransaction()`.



## Return Values

Returns `MongoDB\Driver\Cursor` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used with an associated transaction in combination with a `"readConcern"` or `"writeConcern"` option. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used in combination with an unacknowledged write concern. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors (e.g. invalid command, issuing a write command to a secondary). 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `$options` parameter no longer accepts a `MongoDB\Driver\ReadPreference` instance. |
| PECL mongodb 1.21.0 | Passing a `MongoDB\Driver\ReadPreference` object as `$options` is deprecated and will be removed in 2.0. |
| PECL mongodb 1.4.4 | `MongoDB\Driver\Exception\InvalidArgumentException` will be thrown if the `"session"` option is used in combination with an unacknowledged write concern. |
| PECL mongodb 1.4.0 | The third parameter is now an `$options` array. For backwards compatibility, this parameter will still accept a `MongoDB\Driver\ReadPreference` object. |

## Notes

> It is the caller's responsibility to ensure that the server is capable of executing the write operation. For example, executing a write operation on a secondary (excluding its "local" database) will fail.

## See Also

 `MongoDB\Driver\Command` `MongoDB\Driver\Cursor` `MongoDB\Driver\Server::executeReadCommand()` `MongoDB\Driver\Server::executeReadWriteCommand()` `MongoDB\Driver\Server::executeWriteCommand()` `MongoDB\Driver\Manager::executeCommand()`
