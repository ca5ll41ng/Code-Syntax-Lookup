---
id: "en-php-function-mongodb-driver-writeconcernerror-getcode"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcernError::getCode"
title: "Returns the WriteConcernError's error code"
signature: "final public int MongoDB\\Driver\\WriteConcernError::getCode()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcernerror.getcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteConcernError's error code

## Description

```php
final public int MongoDB\Driver\WriteConcernError::getCode()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteConcernError's error code.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcernError::getCode()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSet=myReplicaSet");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);

$writeConcern = new MongoDB\Driver\WriteConcern(2, 1);

try {
    $manager->executeBulkWrite('db.collection', $bulk, ['writeConcern' => $writeConcern]);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteConcernError()->getCode());
}

?>

   
```

The above example will output something similar to:

```text


int(64)

   
```

## See Also

 [Write Concern reference]()
