---
id: "en-php-function-mongodb-driver-writeresult-getwriteerrors"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteResult::getWriteErrors"
title: "Returns any write errors that occurred"
signature: "final public array MongoDB\\Driver\\WriteResult::getWriteErrors()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeresult.getwriteerrors.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns any write errors that occurred

## Description

```php
final public array MongoDB\Driver\WriteResult::getWriteErrors()
```

## Parameters

This function has no parameters.

## Return Values

Returns an array of `MongoDB\Driver\WriteError` objects for any write errors encountered during the write operation. The array will be empty if no write errors occurred.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteResult::getWriteErrors()` with a single error**

```php


<?php

$manager = new MongoDB\Driver\Manager;

/* By default, bulk write operations are executed serially in order and
 * execution will stop after the first error.
 */
$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 2]);
$bulk->insert(['_id' => 2]);
$bulk->insert(['_id' => 3]);
$bulk->insert(['_id' => 4]);
$bulk->insert(['_id' => 4]);

try {
    $result = $manager->executeBulkWrite('db.collection', $bulk);
} catch (MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteErrors());
}

?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  object(MongoDB\Driver\WriteError)#5 (4) {
    ["message"]=>
    string(81) "E11000 duplicate key error collection: db.collection index: _id_ dup key: { : 2 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(2)
    ["info"]=>
    NULL
  }
}

   
```

**`MongoDB\Driver\WriteResult::getWriteErrors()` with multiple errors**

```php


<?php

$manager = new MongoDB\Driver\Manager;

/* The "ordered" option may be used to allow bulk write operations to continue
 * executing after the first error is encountered.
 */
$bulk = new MongoDB\Driver\BulkWrite(['ordered' => false]);
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 2]);
$bulk->insert(['_id' => 2]);
$bulk->insert(['_id' => 3]);
$bulk->insert(['_id' => 4]);
$bulk->insert(['_id' => 4]);

try {
    $result = $manager->executeBulkWrite('db.collection', $bulk);
} catch (MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteErrors());
}

?>

   
```

The above example will output something similar to:

```text


array(2) {
  [0]=>
  object(MongoDB\Driver\WriteError)#5 (4) {
    ["message"]=>
    string(81) "E11000 duplicate key error collection: db.collection index: _id_ dup key: { : 2 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(2)
    ["info"]=>
    NULL
  }
  [1]=>
  object(MongoDB\Driver\WriteError)#6 (4) {
    ["message"]=>
    string(81) "E11000 duplicate key error collection: db.collection index: _id_ dup key: { : 4 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(5)
    ["info"]=>
    NULL
  }
}

   
```

## See Also

 `MongoDB\Driver\WriteError`
