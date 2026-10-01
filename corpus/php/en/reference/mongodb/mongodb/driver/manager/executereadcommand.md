---
id: "en-php-function-mongodb-driver-manager-executereadcommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::executeReadCommand"
title: "Execute a database command that reads"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Manager::executeReadCommand(string $db, MongoDB\\Driver\\Command $command, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.executereadcommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database command that reads

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Manager::executeReadCommand(string $db, MongoDB\Driver\Command $command, array|null $options = null)
```

Selects a server according to the `"readPreference"` option and executes the command on that server.

This method will apply logic that is specific to commands that read (e.g. [distinct](reference/command/distinct/)). Default values for the `"readPreference"` and `"readConcern"` options will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

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

 `MongoDB\Driver\Command` `MongoDB\Driver\Cursor` `MongoDB\Driver\Manager::executeCommand()` `MongoDB\Driver\Manager::executeReadWriteCommand()` `MongoDB\Driver\Manager::executeWriteCommand()` `MongoDB\Driver\Server::executeReadCommand()`
