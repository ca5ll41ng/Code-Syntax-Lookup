---
id: "en-php-function-mongodb-driver-manager-executebulkwrite"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::executeBulkWrite"
title: "Execute one or more write operations"
signature: "final public MongoDB\\Driver\\WriteResult MongoDB\\Driver\\Manager::executeBulkWrite(string $namespace, MongoDB\\Driver\\BulkWrite $bulk, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.executebulkwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute one or more write operations

## Description

```php
final public MongoDB\Driver\WriteResult MongoDB\Driver\Manager::executeBulkWrite(string $namespace, MongoDB\Driver\BulkWrite $bulk, array|null $options = null)
```

Executes one or more write operations on the primary server.

A `MongoDB\Driver\BulkWrite` can be constructed with one or more write operations of varying types (e.g. updates, deletes, and inserts). The driver will attempt to send operations of the same type to the server in as few requests as possible to optimize round trips.

The default value for the `"writeConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

## Parameters

- **`$namespace` (`string`)** — A fully qualified namespace (e.g. `"databaseName.collectionName"`).
- **`$bulk` (`MongoDB\Driver\BulkWrite`)** — The write(s) to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | session | `MongoDB\Driver\Session` | A session to associate with the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |

## Return Values

Returns `MongoDB\Driver\WriteResult` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` does not contain any write operations. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` has already been executed. `MongoDB\Driver\BulkWrite` objects may not be executed multiple times. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used in combination with an unacknowledged write concern. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\BulkWriteException` on any write failure (e.g. write error, failure to apply a write concern) Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `$options` parameter no longer accepts a `MongoDB\Driver\WriteConcern` instance. |
| PECL mongodb 1.21.0 | Passing a `MongoDB\Driver\WriteConcern` object as `$options` is deprecated and will be removed in 2.0. |
| PECL mongodb 1.4.4 | `MongoDB\Driver\Exception\InvalidArgumentException` will be thrown if the `"session"` option is used in combination with an unacknowledged write concern. |
| PECL mongodb 1.4.0 | The third parameter is now an `$options` array. For backwards compatibility, this parameter will still accept a `MongoDB\Driver\WriteConcern` object. |
| PECL mongodb 1.3.0 | `MongoDB\Driver\Exception\InvalidArgumentException` is now thrown if `$bulk` does not contain any write operations. Previously, a `MongoDB\Driver\Exception\BulkWriteException` was thrown. |

## Examples

**`MongoDB\Driver\Manager::executeBulkWrite()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWrite();

$bulk->insert(['_id' => 1, 'x' => 1]);
$bulk->insert(['_id' => 2, 'x' => 2]);

$bulk->update(['x' => 2], ['$set' => ['x' => 1]], ['multi' => false, 'upsert' => false]);
$bulk->update(['x' => 3], ['$set' => ['x' => 3]], ['multi' => false, 'upsert' => true]);
$bulk->update(['_id' => 3], ['$set' => ['x' => 3]], ['multi' => false, 'upsert' => true]);

$bulk->insert(['_id' => 4, 'x' => 2]);

$bulk->delete(['x' => 1], ['limit' => 1]);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 100);
$result = $manager->executeBulkWrite('db.collection', $bulk, ['writeConcern' => $writeConcern]);

printf("Inserted %d document(s)\n", $result->getInsertedCount());
printf("Matched  %d document(s)\n", $result->getMatchedCount());
printf("Updated  %d document(s)\n", $result->getModifiedCount());
printf("Upserted %d document(s)\n", $result->getUpsertedCount());
printf("Deleted  %d document(s)\n", $result->getDeletedCount());

foreach ($result->getUpsertedIds() as $index => $id) {
    printf('upsertedId[%d]: ', $index);
    var_dump($id);
}

/* If the WriteConcern could not be fulfilled */
if ($writeConcernError = $result->getWriteConcernError()) {
    printf("%s (%d): %s\n", $writeConcernError->getMessage(), $writeConcernError->getCode(), var_export($writeConcernError->getInfo(), true));
}

/* If a write could not happen at all */
foreach ($result->getWriteErrors() as $writeError) {
    printf("Operation#%d: %s (%d)\n", $writeError->getIndex(), $writeError->getMessage(), $writeError->getCode());
}
?>

   
```

The above example will output something similar to:

```text


Inserted 3 document(s)
Matched  1 document(s)
Updated  1 document(s)
Upserted 2 document(s)
Deleted  1 document(s)
upsertedId[3]: object(MongoDB\BSON\ObjectId)#5 (1) {
  ["oid"]=>
  string(24) "54d3adc3ce7a792f4d703756"
}
upsertedId[4]: int(3)

   
```

## See Also

 `MongoDB\Driver\BulkWrite` `MongoDB\Driver\WriteResult` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\Server::executeBulkWrite()`
