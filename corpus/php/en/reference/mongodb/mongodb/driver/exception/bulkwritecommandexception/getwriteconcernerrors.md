---
id: "en-php-function-mongodb-driver-bulkwritecommandexception-getwriteconcernerrors"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Exception\\BulkWriteCommandException::getWriteConcernErrors"
title: "Returns any write concern errors"
signature: "final public array MongoDB\\Driver\\Exception\\BulkWriteCommandException::getWriteConcernErrors()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandexception.getwriteconcernerrors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns any write concern errors

## Description

```php
final public array MongoDB\Driver\Exception\BulkWriteCommandException::getWriteConcernErrors()
```

## Parameters

This function has no parameters.

## Return Values

An array of any `MongoDB\Driver\WriteConcernError`s that occurred while executing the bulk write. This list may have multiple items if more than one server command was required to execute the bulk write.

## Examples

**`MongoDB\Driver\Exception\BulkWriteCommandException::getWriteConcernErrors()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->insertOne('db.coll', ['x' => 1]);

$writeConcern = new MongoDB\Driver\WriteConcern(50);

try {
    $result = $manager->executeBulkWriteCommand($bulk, ['writeConcern' => $writeConcern]);
} catch (MongoDB\Driver\Exception\BulkWriteCommandException $e) {
    var_dump($e->getWriteConcernErrors());
}

?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  object(MongoDB\Driver\WriteConcernError)#6 (3) {
    ["message"]=>
    string(29) "Not enough data-bearing nodes"
    ["code"]=>
    int(100)
    ["info"]=>
    object(stdClass)#8 (1) {
      ["writeConcern"]=>
      object(stdClass)#7 (3) {
        ["w"]=>
        int(50)
        ["wtimeout"]=>
        int(0)
        ["provenance"]=>
        string(14) "clientSupplied"
      }
    }
  }
}

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWriteCommand()` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\WriteConcernError`
