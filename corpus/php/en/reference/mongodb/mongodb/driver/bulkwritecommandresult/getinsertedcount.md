---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-getinsertedcount"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::getInsertedCount"
title: "Returns the number of documents inserted"
signature: "final public int MongoDB\\Driver\\BulkWriteCommandResult::getInsertedCount()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.getinsertedcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of documents inserted

## Description

```php
final public int MongoDB\Driver\BulkWriteCommandResult::getInsertedCount()
```

## Parameters

This function has no parameters.

## Return Values

Returns the total number of documents inserted (excluding upserts) by all operations.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::getInsertedCount()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->insertOne('db.coll', ['x' => 1]);
$bulk->updateOne('db.coll', ['x' => 1], ['$set' => ['y' => 3]]);
$bulk->updateOne('db.coll', ['x' => 2], ['$set' => ['y' => 1]], ['upsert' => true]);
$bulk->updateOne('db.coll', ['x' => 3], ['$set' => ['y' => 2]], ['upsert' => true]);
$bulk->deleteMany('db.coll', []);

$result = $manager->executeBulkWriteCommand($bulk);

var_dump($result->getInsertedCount());

?>

   
```

The above example will output:

```text


int(1)

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult::getInsertResults()` `MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()`
