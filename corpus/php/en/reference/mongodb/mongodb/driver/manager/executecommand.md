---
id: "en-php-function-mongodb-driver-manager-executecommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::executeCommand"
title: "Execute a database command"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Manager::executeCommand(string $db, MongoDB\\Driver\\Command $command, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.executecommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database command

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Manager::executeCommand(string $db, MongoDB\Driver\Command $command, array|null $options = null)
```

Selects a server according to the `"readPreference"` option and executes the command on that server.

This method applies no special logic to the command. The Default values for the `"readPreference"`, `"readConcern"`, and `"writeConcern"` options will be inferred from an active transaction (indicated by the `"session"` option). If there is no active transaction, a primary read preference will be used for server selection.

Default values will *not* be inferred from the connection URI. Users are therefore encouraged to use specific read and/or write command methods if possible.

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

## Examples

**`MongoDB\Driver\Manager::executeCommand()` with a command returning a single result document**

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$command = new MongoDB\Driver\Command(['ping' => 1]);

try {
    $cursor = $manager->executeCommand('admin', $command);
} catch(MongoDB\Driver\Exception $e) {
    echo $e->getMessage(), "\n";
    exit;
}

/* The ping command returns a single result document, so we need to access the
 * first result in the cursor. */
$response = $cursor->toArray()[0];

var_dump($response);

?>

   
```

The above example will output:

```text


array(1) {
  ["ok"]=>
  float(1)
}

   
```

**`MongoDB\Driver\Manager::executeCommand()` with a command returning a cursor**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1, 'y' => 'foo']);
$bulk->insert(['x' => 2, 'y' => 'bar']);
$bulk->insert(['x' => 3, 'y' => 'bar']);
$manager->executeBulkWrite('db.collection', $bulk);

$command = new MongoDB\Driver\Command([
    'aggregate' => 'collection',
    'pipeline' => [
        ['$group' => ['_id' => '$y', 'sum' => ['$sum' => '$x']]],
    ],
    'cursor' => new stdClass,
]);
$cursor = $manager->executeCommand('db', $command);

/* The aggregate command can optionally return its results in a cursor instead
 * of a single result document. In this case, we can iterate on the cursor
 * directly to access those results. */
foreach ($cursor as $document) {
    var_dump($document);
}

?>

   
```

The above example will output:

```text


object(stdClass)#6 (2) {
  ["_id"]=>
  string(3) "bar"
  ["sum"]=>
  int(10)
}
object(stdClass)#7 (2) {
  ["_id"]=>
  string(3) "foo"
  ["sum"]=>
  int(2)
}

   
```

**Limiting execution time for a command**

The execution time of a command may be limited by specifying a value for `"maxTimeMS"` in the `MongoDB\Driver\Command` document. Note that this time limit is enforced on the server side and does not take network latency into account. See [Terminate Running Operations]() in the MongoDB manual for more information.

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');

$command = new MongoDB\Driver\Command([
    'count' => 'collection',
    'query' => ['x' => ['$gt' => 1]],
    'maxTimeMS' => 1000,
]);

$cursor = $manager->executeCommand('db', $command);

var_dump($cursor->toArray()[0]);

?>

   
```

If the command fails to complete after one second of execution time on the server, a `MongoDB\Driver\Exception\ExecutionTimeoutException` will be thrown.

## Notes

> If a secondary `$readPreference` is used, it is the caller's responsibility to ensure that the `$command` can be executed on a secondary. No validation is done by the driver.

> This method does not default to using the read preference from the MongoDB Connection URI. Applications in need of that behavior should consider using `MongoDB\Driver\Manager::executeReadCommand()`.

## See Also

 `MongoDB\Driver\Command` `MongoDB\Driver\Cursor` `MongoDB\Driver\Manager::executeReadCommand()` `MongoDB\Driver\Manager::executeReadWriteCommand()` `MongoDB\Driver\Manager::executeWriteCommand()` `MongoDB\Driver\Server::executeCommand()`
