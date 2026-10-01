---
id: "en-php-guide-class-mongodb-driver-bulkwritecommand"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-bulkwritecommand"
title: "The MongoDB\\Driver\\BulkWriteCommand class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-bulkwritecommand.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\BulkWriteCommand class

MongoDB\Driver\BulkWriteCommand

   Introduction  `MongoDB\Driver\BulkWriteCommand` collects one or more write operations that should be sent to the server using the [bulkWrite](bulkWrite) command introduced in MongoDB 8.0. After adding any number of insert, update, and delete operations, the command may be executed via `MongoDB\Driver\Manager::executeBulkWriteCommand()`.    Unlike `MongoDB\Driver\BulkWrite`, where all write operations must target the same collection, each write operation within `MongoDB\Driver\BulkWriteCommand` may target a different collection.    Write operations may either be ordered (default) or unordered. Ordered write operations are sent to the server, in the order provided, for serial execution. If a write fails, any remaining operations will be aborted. Unordered operations are sent to the server in an arbitrary order where they may be executed in parallel. Any errors that occur are reported after all operations have been attempted.      Class Synopsis   `MongoDB\Driver\BulkWriteCommand`   `final`  `MongoDB\Driver\BulkWriteCommand`   Countable          Examples 
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

   See Also  `MongoDB\Driver\Manager::executeBulkWriteCommand()` `MongoDB\Driver\BulkWriteCommandResult` `MongoDB\Driver\Exception\BulkWriteCommandException` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\WriteConcernError` `MongoDB\Driver\WriteError`
