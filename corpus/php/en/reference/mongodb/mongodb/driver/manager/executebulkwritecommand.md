---
id: "en-php-function-mongodb-driver-manager-executebulkwritecommand"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::executeBulkWriteCommand"
title: "Execute write operations using the bulkWrite command"
signature: "final public MongoDB\\Driver\\BulkWriteCommandResult MongoDB\\Driver\\Manager::executeBulkWriteCommand(MongoDB\\Driver\\BulkWriteCommand $bulk, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.executebulkwritecommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute write operations using the bulkWrite command

## Description

```php
final public MongoDB\Driver\BulkWriteCommandResult MongoDB\Driver\Manager::executeBulkWriteCommand(MongoDB\Driver\BulkWriteCommand $bulk, array|null $options = null)
```

Executes one or more write operations on the primary server using the [bulkWrite](bulkWrite) command introduced in MongoDB 8.0.

A `MongoDB\Driver\BulkWriteCommand` can be constructed with one or more write operations of varying types (e.g. inserts, updates, and deletes). Each write operation may target a different collection.

The default value for the `"writeConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

## Parameters

- **`$bulk` (`MongoDB\Driver\BulkWriteCommand`)** — The write(s) to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | session | `MongoDB\Driver\Session` | A session to associate with the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |

## Return Values

Returns `MongoDB\Driver\BulkWriteCommandResult` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` does not contain any write operations. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` has already been executed. `MongoDB\Driver\BulkWriteCommand` objects may not be executed multiple times. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used in combination with an unacknowledged write concern. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\BulkWriteCommandException` on any write failure (e.g. command failure, write or write concern error) Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## Examples

**Mixed write operations**

Mixed write operations (i.e. inserts, updates, and deletes) will be sent to the server using a single [bulkWrite](bulkWrite) command.

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;

// Delete documents from both collections
$bulk->deleteMany('db.coll_one', []);
$bulk->deleteMany('db.coll_two', []);

// Insert documents into two collections
$bulk->insertOne('db.coll_one', ['_id' => 1]);
$bulk->insertOne('db.coll_two', ['_id' => 2]);
$bulk->insertOne('db.coll_two', ['_id' => 3]);

// Update a document in "coll_one"
$bulk->updateOne('db.coll_one', ['_id' => 1], ['$set' => ['x' => 1]]);

$result = $manager->executeBulkWriteCommand($bulk);

printf("Inserted %d document(s)\n", $result->getInsertedCount());
printf("Updated  %d document(s)\n", $result->getModifiedCount());

?>

   
```

The above example will output:

```text


Inserted 3 document(s)
Updated  1 document(s)

   
```

**Ordered write operations causing an error**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;

$bulk->deleteMany('db.coll', []);
$bulk->insertOne('db.coll', ['_id' => 1]);
$bulk->insertOne('db.coll', ['_id' => 2]);
$bulk->insertOne('db.coll', ['_id' => 1]);
$bulk->insertOne('db.coll', ['_id' => 3]);

try {
    $result = $manager->executeBulkWriteCommand($bulk);
} catch (MongoDB\Driver\Exception\BulkWriteCommandException $e) {
    $result = $e->getPartialResult();

    var_dump($e->getWriteErrors());
}

printf("Inserted %d document(s)\n", $result->getInsertedCount());

?>

   
```

The above example will output something similar to:

```text


array(1) {
  [3]=>
  object(MongoDB\Driver\WriteError)#5 (4) {
    ["message"]=>
    string(78) "E11000 duplicate key error collection: db.coll index: _id_ dup key: { _id: 1 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(3)
    ["info"]=>
    object(stdClass)#6 (0) {
    }
  }
}
Inserted 2 document(s)

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommand` `MongoDB\Driver\BulkWriteCommandResult` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\Server::executeBulkWriteCommand()`
