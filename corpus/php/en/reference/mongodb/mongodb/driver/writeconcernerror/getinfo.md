---
id: "en-php-function-mongodb-driver-writeconcernerror-getinfo"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcernError::getInfo"
title: "Returns metadata document for the WriteConcernError"
signature: "final public object|null MongoDB\\Driver\\WriteConcernError::getInfo()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcernerror.getinfo.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns metadata document for the WriteConcernError

## Description

```php
final public object|null MongoDB\Driver\WriteConcernError::getInfo()
```

## Parameters

This function has no parameters.

## Return Values

Returns the metadata document for the WriteConcernError, or `null` if no metadata is available.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcernError::getInfo()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSet=myReplicaSet");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);

$writeConcern = new MongoDB\Driver\WriteConcern(2, 1);

try {
    $manager->executeBulkWrite('db.collection', $bulk, ['writeConcern' => $writeConcern]);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteConcernError()->getInfo());
}

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#1 (1) {
  ["wtimeout"]=>
  bool(true)
}

   
```

## See Also

 [Write Concern reference]()
