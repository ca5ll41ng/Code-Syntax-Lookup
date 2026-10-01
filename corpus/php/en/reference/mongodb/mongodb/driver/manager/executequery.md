---
id: "en-php-function-mongodb-driver-manager-executequery"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::executeQuery"
title: "Execute a database query"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Manager::executeQuery(string $namespace, MongoDB\\Driver\\Query $query, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.executequery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database query

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Manager::executeQuery(string $namespace, MongoDB\Driver\Query $query, array|null $options = null)
```

Selects a server according to the `"readPreference"` option and executes the query on that server.

Default values for the `"readPreference"` option and Query's `"readConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

## Parameters

- **`$namespace` (`string`)** — A fully qualified namespace (e.g. `"databaseName.collectionName"`).
- **`$query` (`MongoDB\Driver\Query`)** — The query to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | readPreference | `MongoDB\Driver\ReadPreference` | A read preference to use for selecting a server for the operation. | | session | `MongoDB\Driver\Session` | A session to associate with the operation. |

## Return Values

Returns `MongoDB\Driver\Cursor` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors (e.g. invalid query operators). 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `$options` parameter no longer accepts a `MongoDB\Driver\ReadPreference` instance. |
| PECL mongodb 1.21.0 | Passing a `MongoDB\Driver\ReadPreference` object as `$options` is deprecated and will be removed in 2.0. |
| PECL mongodb 1.4.0 | The third parameter is now an `$options` array. For backwards compatibility, this parameter will still accept a `MongoDB\Driver\ReadPreference` object. |

## Examples

**`MongoDB\Driver\Manager::executeQuery()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->insert(['x' => 2]);
$bulk->insert(['x' => 3]);
$manager->executeBulkWrite('db.collection', $bulk);

$filter = ['x' => ['$gt' => 1]];
$options = [
    'projection' => ['_id' => 0],
    'sort' => ['x' => -1],
];

$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery('db.collection', $query);

foreach ($cursor as $document) {
    var_dump($document);
}

?>

   
```

The above example will output:

```text


object(stdClass)#6 (1) {
  ["x"]=>
  int(3)
}
object(stdClass)#7 (1) {
  ["x"]=>
  int(2)
}

   
```

**Limiting execution time for a query**

The `"maxTimeMS"` `MongoDB\Driver\Query` option may be used to limit the execution time of a query. Note that this time limit is enforced on the server side and does not take network latency into account. See [Terminate Running Operations]() in the MongoDB manual for more information.

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');

$filter = ['x' => ['$gt' => 1]];
$options = [
    'maxTimeMS' => 1000,
];

$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery('db.collection', $query);

foreach ($cursor as $document) {
    var_dump($document);
}

?>

   
```

If the query fails to complete after one second of execution time on the server, a `MongoDB\Driver\Exception\ExecutionTimeoutException` will be thrown.

## See Also

 `MongoDB\Driver\Cursor` `MongoDB\Driver\Query` `MongoDB\Driver\ReadPreference` `MongoDB\Driver\Server::executeQuery()`
