---
id: "en-php-function-mongodb-driver-writeconcernerror-getmessage"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcernError::getMessage"
title: "Returns the WriteConcernError's error message"
signature: "final public string MongoDB\\Driver\\WriteConcernError::getMessage()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcernerror.getmessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteConcernError's error message

## Description

```php
final public string MongoDB\Driver\WriteConcernError::getMessage()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteConcernError's error message.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcernError::getMessage()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSet=myReplicaSet");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);

$writeConcern = new MongoDB\Driver\WriteConcern(2, 1);

try {
    $manager->executeBulkWrite('db.collection', $bulk, ['writeConcern' => $writeConcern]);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteConcernError()->getMessage());
}

?>

   
```

The above example will output something similar to:

```text


string(33) "waiting for replication timed out"

   
```

## See Also

 [Write Concern reference]()
