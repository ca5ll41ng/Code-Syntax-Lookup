---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-getupdateresults"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::getUpdateResults"
title: "Returns verbose results for successful updates"
signature: "final public MongoDB\\BSON\\Document|null MongoDB\\Driver\\BulkWriteCommandResult::getUpdateResults()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.getupdateresults.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns verbose results for successful updates

## Description

```php
final public MongoDB\BSON\Document|null MongoDB\Driver\BulkWriteCommandResult::getUpdateResults()
```

## Parameters

This function has no parameters.

## Return Values

Returns a document containing the result of each successful update operation, or `null` if verbose results were not requested. The document keys will correspond to the index of the write operation from `MongoDB\Driver\BulkWriteCommand`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::getUpdateResults()` example**

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

var_dump($result->getUpdateResults()->toPHP());

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#16 (3) {
  ["1"]=>
  object(stdClass)#7 (2) {
    ["matchedCount"]=>
    object(MongoDB\BSON\Int64)#5 (1) {
      ["integer"]=>
      string(1) "1"
    }
    ["modifiedCount"]=>
    object(MongoDB\BSON\Int64)#6 (1) {
      ["integer"]=>
      string(1) "1"
    }
  }
  ["2"]=>
  object(stdClass)#11 (3) {
    ["matchedCount"]=>
    object(MongoDB\BSON\Int64)#8 (1) {
      ["integer"]=>
      string(1) "1"
    }
    ["modifiedCount"]=>
    object(MongoDB\BSON\Int64)#9 (1) {
      ["integer"]=>
      string(1) "0"
    }
    ["upsertedId"]=>
    object(MongoDB\BSON\ObjectId)#10 (1) {
      ["oid"]=>
      string(24) "67f7eb9b1f198bbcb880d575"
    }
  }
  ["3"]=>
  object(stdClass)#15 (3) {
    ["matchedCount"]=>
    object(MongoDB\BSON\Int64)#12 (1) {
      ["integer"]=>
      string(1) "1"
    }
    ["modifiedCount"]=>
    object(MongoDB\BSON\Int64)#13 (1) {
      ["integer"]=>
      string(1) "0"
    }
    ["upsertedId"]=>
    object(MongoDB\BSON\ObjectId)#14 (1) {
      ["oid"]=>
      string(24) "67f7eb9b1f198bbcb880d576"
    }
  }
}

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult::getMatchedCount()` `MongoDB\Driver\BulkWriteCommandResult::getModifiedCount()` `MongoDB\Driver\BulkWriteCommandResult::getUpsertedCount()` `MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()`
