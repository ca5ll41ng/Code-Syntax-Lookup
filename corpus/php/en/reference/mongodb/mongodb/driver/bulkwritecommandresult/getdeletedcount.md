---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-getdeletedcount"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::getDeletedCount"
title: "Returns the number of documents deleted"
signature: "final public int MongoDB\\Driver\\BulkWriteCommandResult::getDeletedCount()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.getdeletedcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of documents deleted

## Description

```php
final public int MongoDB\Driver\BulkWriteCommandResult::getDeletedCount()
```

## Parameters

This function has no parameters.

## Return Values

Returns the total number of documents deleted by all operations.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::getDeletedCount()` example**

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

var_dump($result->getDeletedCount());

?>

   
```

The above example will output:

```text


int(3)

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult::getDeleteResults()` `MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()`
