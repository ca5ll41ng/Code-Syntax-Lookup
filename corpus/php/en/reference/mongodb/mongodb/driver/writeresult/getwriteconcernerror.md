---
id: "en-php-function-mongodb-driver-writeresult-getwriteconcernerror"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteResult::getWriteConcernError"
title: "Returns any write concern error that occurred"
signature: "final public MongoDB\\Driver\\WriteConcernError|null MongoDB\\Driver\\WriteResult::getWriteConcernError()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeresult.getwriteconcernerror.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns any write concern error that occurred

## Description

```php
final public MongoDB\Driver\WriteConcernError|null MongoDB\Driver\WriteResult::getWriteConcernError()
```

## Parameters

This function has no parameters.

## Return Values

Returns a `MongoDB\Driver\WriteConcernError` if a write concern error was encountered during the write operation, and `null` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteResult::getWriteConcernError()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSet=myReplicaSet");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);

$writeConcern = new MongoDB\Driver\WriteConcern(2, 1);

try {
    $manager->executeBulkWrite('db.collection', $bulk, ['writeConcern' => $writeConcern]);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteConcernError());
}

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\Driver\WriteConcernError)#6 (3) {
  ["message"]=>
  string(33) "waiting for replication timed out"
  ["code"]=>
  int(64)
  ["info"]=>
  object(stdClass)#7 (1) {
    ["wtimeout"]=>
    bool(true)
  }
}

   
```

## See Also

 `MongoDB\Driver\WriteConcern` [Write Concern reference]()
