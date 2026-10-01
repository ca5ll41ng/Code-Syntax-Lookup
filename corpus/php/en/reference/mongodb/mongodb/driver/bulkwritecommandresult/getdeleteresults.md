---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-getdeleteresults"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::getDeleteResults"
title: "Returns verbose results for successful deletes"
signature: "final public MongoDB\\BSON\\Document|null MongoDB\\Driver\\BulkWriteCommandResult::getDeleteResults()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.getdeleteresults.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns verbose results for successful deletes

## Description

```php
final public MongoDB\BSON\Document|null MongoDB\Driver\BulkWriteCommandResult::getDeleteResults()
```

## Parameters

This function has no parameters.

## Return Values

Returns a document containing the result of each successful delete operation, or `null` if verbose results were not requested. The document keys will correspond to the index of the write operation from `MongoDB\Driver\BulkWriteCommand`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::getDeleteResults()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand(['verboseResults' => true]);
$bulk->insertOne('db.coll', ['x' => 1]);
$bulk->updateOne('db.coll', ['x' => 1], ['$set' => ['y' => 3]]);
$bulk->updateOne('db.coll', ['x' => 2], ['$set' => ['y' => 1]], ['upsert' => true]);
$bulk->updateOne('db.coll', ['x' => 3], ['$set' => ['y' => 2]], ['upsert' => true]);
$bulk->deleteMany('db.coll', []);

$result = $manager->executeBulkWriteCommand($bulk);

var_dump($result->getDeleteResults()->toPHP());

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#7 (1) {
  ["4"]=>
  object(stdClass)#6 (1) {
    ["deletedCount"]=>
    object(MongoDB\BSON\Int64)#5 (1) {
      ["integer"]=>
      string(1) "3"
    }
  }
}

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult::getDeletedCount()` `MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()`
