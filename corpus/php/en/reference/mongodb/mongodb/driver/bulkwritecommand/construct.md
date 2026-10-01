---
id: "en-php-function-mongodb-driver-bulkwritecommand-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommand::__construct"
title: "Create a new BulkWriteCommand"
signature: "public MongoDB\\Driver\\BulkWriteCommand::__construct(array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommand.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new BulkWriteCommand

## Description

```php
public MongoDB\Driver\BulkWriteCommand::__construct(array|null $options = null)
```

Constructs a new `MongoDB\Driver\BulkWriteCommand`, which may be used to perform many insert, update, and delete operations on multiple collections in a single request using the [bulkWrite](bulkWrite) command introduced in MongoDB 8.0. This differs from `MongoDB\Driver\BulkWrite`, which is supported by all server versions but limited to a single collection.

After all write operations have been added, this object may be executed with `MongoDB\Driver\Manager::executeBulkWriteCommand()`.

## Parameters

- **`$options` (`array`)** — | Option | Type | Description | Default | | --- | --- | --- | --- | | bypassDocumentValidation | `bool` | If `true`, allows insert and update operations to circumvent document level validation. | `false` | | comment | `mixed` | An arbitrary comment to help trace the operation through the database profiler, currentOp output, and logs. | | let | `array\|object` | Map of parameter names and values. Values must be constant or closed expressions that do not reference document fields. Parameters can then be accessed as variables in an aggregate expression context (e.g. `$$var`). This option is available in MongoDB 5.0+ and will result in an exception at execution time if specified for an older server version. | | ordered | `bool` | Whether the operations in this bulk write should be executed in the order in which they were specified. If `false`, writes will continue to be executed if an individual write fails. If `true`, writes will stop executing if an individual write fails. | `true` | | verboseResults | `bool` | Whether detailed results for each successful operation should be included in the returned `MongoDB\Driver\BulkWriteCommandResult`. | `false` |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\BulkWriteCommand::__construct()` example**

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

## See Also

 `MongoDB\Driver\Manager::executeBulkWriteCommand()` `MongoDB\Driver\BulkWriteCommandResult`
