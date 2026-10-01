---
id: "en-php-function-mongodb-driver-bulkwritecommandexception-getwriteerrors"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Exception\\BulkWriteCommandException::getWriteErrors"
title: "Returns any write errors"
signature: "final public array MongoDB\\Driver\\Exception\\BulkWriteCommandException::getWriteErrors()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandexception.getwriteerrors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns any write errors

## Description

```php
final public array MongoDB\Driver\Exception\BulkWriteCommandException::getWriteErrors()
```

## Parameters

This function has no parameters.

## Return Values

An array of any `MongoDB\Driver\WriteError`s that occurred during the execution of individual write operations. Array keys will correspond to the index of the write operation from `MongoDB\Driver\BulkWriteCommand`. This map will contain at most one entry if the bulk write was ordered.

## Examples

**`MongoDB\Driver\Exception\BulkWriteCommandException::getWriteErrors()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand(['ordered' => false]);
$bulk->deleteMany('db.coll', []);
$bulk->insertOne('db.coll', ['_id' => 1]);
$bulk->insertOne('db.coll', ['_id' => 1]);
$bulk->insertOne('db.coll', ['_id' => 1]);

try {
    $result = $manager->executeBulkWriteCommand($bulk);
} catch (MongoDB\Driver\Exception\BulkWriteCommandException $e) {
    var_dump($e->getWriteErrors());
}

?>

   
```

The above example will output something similar to:

```text


array(2) {
  [2]=>
  object(MongoDB\Driver\WriteError)#5 (4) {
    ["message"]=>
    string(78) "E11000 duplicate key error collection: db.coll index: _id_ dup key: { _id: 1 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(2)
    ["info"]=>
    object(stdClass)#6 (0) {
    }
  }
  [3]=>
  object(MongoDB\Driver\WriteError)#7 (4) {
    ["message"]=>
    string(78) "E11000 duplicate key error collection: db.coll index: _id_ dup key: { _id: 1 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(3)
    ["info"]=>
    object(stdClass)#8 (0) {
    }
  }
}

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWriteCommand()` `MongoDB\Driver\WriteError`
