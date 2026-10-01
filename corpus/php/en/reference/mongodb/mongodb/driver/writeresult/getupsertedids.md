---
id: "en-php-function-mongodb-driver-writeresult-getupsertedids"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteResult::getUpsertedIds"
title: "Returns an array of identifiers for upserted documents"
signature: "final public array MongoDB\\Driver\\WriteResult::getUpsertedIds()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeresult.getupsertedids.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of identifiers for upserted documents

## Description

```php
final public array MongoDB\Driver\WriteResult::getUpsertedIds()
```

## Parameters

This function has no parameters.

## Return Values

Returns an array of identifiers (i.e. `"_id"` field values) for upserted documents. The array keys will correspond to the index of the write operation (from `MongoDB\Driver\BulkWrite`) responsible for the upsert.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteResult::getUpsertedIds()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->update(['x' => 1], ['$set' => ['y' => 3]]);
$bulk->update(['x' => 2], ['$set' => ['y' => 1]], ['upsert' => true]);
$bulk->update(['x' => 3], ['$set' => ['y' => 2]], ['upsert' => true]);
$bulk->delete(['x' => 1]);

$result = $manager->executeBulkWrite('db.collection', $bulk);

var_dump($result->getUpsertedIds());

?>

   
```

The above example will output something similar to:

```text


array(2) {
  [2]=>
  object(MongoDB\BSON\ObjectId)#4 (1) {
    ["oid"]=>
    string(24) "580e62a224f2302f191b880b"
  }
  [3]=>
  object(MongoDB\BSON\ObjectId)#5 (1) {
    ["oid"]=>
    string(24) "580e62a224f2302f191b880c"
  }
}

   
```

## See Also

 `MongoDB\Driver\WriteResult::getUpsertedCount()` `MongoDB\Driver\WriteResult::isAcknowledged()`
