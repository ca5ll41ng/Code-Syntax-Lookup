---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-getupsertedcount"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::getUpsertedCount"
title: "Returns the number of documents upserted"
signature: "final public int MongoDB\\Driver\\BulkWriteCommandResult::getUpsertedCount()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.getupsertedcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of documents upserted

## Description

```php
final public int MongoDB\Driver\BulkWriteCommandResult::getUpsertedCount()
```

## Parameters

This function has no parameters.

## Return Values

Returns the total number of documents upserted by all operations.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::getUpsertedCount()` example**

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

var_dump($result->getUpsertedCount());

?>

   
```

The above example will output:

```text


int(2)

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult::getUpdateResults()` `MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()`
