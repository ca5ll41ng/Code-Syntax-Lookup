---
id: "en-php-function-mongodb-driver-server-executereadcommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::executeReadCommand"
title: "Execute a database command that reads on this server"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Server::executeReadCommand(string $db, MongoDB\\Driver\\Command $command, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.executereadcommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database command that reads on this server

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Server::executeReadCommand(string $db, MongoDB\Driver\Command $command, array|null $options = null)
```

Executes the command on this server, irrespective of the `"readPreference"` option.

This method will apply logic that is specific to commands that read (e.g. [distinct](reference/command/distinct/)). Default values for the `"readPreference"` and `"readConcern"` options will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

> The `"readPreference"` option does not control the server to which the driver issues the operation; it will always be executed on this server object. Instead, it may be used when issuing the operation to a secondary (from a replica set connection, not standalone) or mongos node to ensure that the driver sets the wire protocol accordingly or adds the read preference to the operation, respectively.

## Parameters

- **`$db` (`string`)** — The name of the database on which to execute the command.
- **`$command` (`MongoDB\Driver\Command`)** — The command to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | readConcern | `MongoDB\Driver\ReadConcern` | A read concern to apply to the operation. This option is available in MongoDB 3.2+ and will result in an exception at execution time if specified for an older server version. | | readPreference | `MongoDB\Driver\ReadPreference` | A read preference to use for selecting a server for the operation. | | session | `MongoDB\Driver\Session` | A session to associate with the operation. |
  > If you are using a `"session"` which has a transaction in progress, you cannot specify a `"readConcern"` or `"writeConcern"` option. This will result in an `MongoDB\Driver\Exception\InvalidArgumentException` being thrown. Instead, you should set these two options when you create the transaction with `MongoDB\Driver\Session::startTransaction()`.



## Return Values

Returns `MongoDB\Driver\Cursor` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used with an associated transaction in combination with a `"readConcern"` or `"writeConcern"` option. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors (e.g. invalid command). 

## See Also

 `MongoDB\Driver\Command` `MongoDB\Driver\Cursor` `MongoDB\Driver\Server::executeCommand()` `MongoDB\Driver\Server::executeReadWriteCommand()` `MongoDB\Driver\Server::executeWriteCommand()` `MongoDB\Driver\Manager::executeReadCommand()`
