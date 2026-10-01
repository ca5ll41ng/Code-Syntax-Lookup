---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-getmodifiedcount"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::getModifiedCount"
title: "Returns the number of existing documents updated"
signature: "final public int MongoDB\\Driver\\BulkWriteCommandResult::getModifiedCount()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.getmodifiedcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of existing documents updated

## Description

```php
final public int MongoDB\Driver\BulkWriteCommandResult::getModifiedCount()
```

If the update operation results in no change to the document (e.g. setting the value of a field to its current value), the modified count may be less than the value returned by `MongoDB\Driver\BulkWriteCommandResult::getMatchedCount()`.

## Parameters

This function has no parameters.

## Return Values

Returns the total number of existing documents updated by all operations.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::getModifiedCount()` example**

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

var_dump($result->getModifiedCount());

?>

   
```

The above example will output:

```text


int(1)

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult::getMatchedCount()` `MongoDB\Driver\BulkWriteCommandResult::getUpdateResults()` `MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()`
