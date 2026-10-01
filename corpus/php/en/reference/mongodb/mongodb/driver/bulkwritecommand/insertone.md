---
id: "en-php-function-mongodb-driver-bulkwritecommand-insertone"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommand::insertOne"
title: "Add an insertOne operation"
signature: "public mixed MongoDB\\Driver\\BulkWriteCommand::insertOne(string $namespace, array|object $document)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommand.insertone.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add an insertOne operation

## Description

```php
public mixed MongoDB\Driver\BulkWriteCommand::insertOne(string $namespace, array|object $document)
```

Add an insertOne operation to the `MongoDB\Driver\BulkWriteCommand`. The document will be inserted into the collection identified by `$namespace`.

## Parameters

- **`$namespace` (`string`)** — A fully qualified namespace (e.g. `"databaseName.collectionName"`).
- **`$document` (`array|object`)** — A document to insert.

## Return Values

Returns the `_id` of the inserted document. If the `$document` did not have an `_id`, the `MongoDB\BSON\ObjectId` generated for the insert will be returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\BulkWriteCommand::insertOne()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;

$doc1 = ['x' => 1];
$doc2 = ['_id' => 'custom-id', 'x' => 2];
$doc3 = ['_id' => new MongoDB\BSON\ObjectId('0123456789abcdef01234567'), 'x' => 3];

$id1 = $bulk->insertOne('db.coll', $doc1);
$id2 = $bulk->insertOne('db.coll', $doc2);
$id3 = $bulk->insertOne('db.coll', $doc3);

var_dump($id1, $id2, $id3);

$result = $manager->executeBulkWriteCommand($bulk);

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\BSON\ObjectId)#3 (1) {
  ["oid"]=>
  string(24) "67f58058d1a0aa2fd80d55d0"
}
string(9) "custom-id"
object(MongoDB\BSON\ObjectId)#4 (1) {
  ["oid"]=>
  string(24) "0123456789abcdef01234567"
}

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWriteCommand()` `MongoDB\Driver\BulkWriteCommandResult` `MongoDB\BSON\ObjectId`
