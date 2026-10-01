---
id: "en-php-function-mongodb-driver-cursor-toarray"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::toArray"
title: "Returns an array containing all results for this cursor"
signature: "final public array MongoDB\\Driver\\Cursor::toArray()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array containing all results for this cursor

## Description

```php
final public array MongoDB\Driver\Cursor::toArray()
```

Iterates the cursor and returns its results in an array. `MongoDB\Driver\Cursor::setTypeMap()` may be used to control how documents are unserialized into PHP values.

## Parameters

This function has no parameters.

## Return Values

Returns an `array` containing all results for this cursor.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Cursor::toArray()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->insert(['x' => 2]);
$bulk->insert(['x' => 3]);
$manager->executeBulkWrite('db.collection', $bulk);

$query = new MongoDB\Driver\Query([]);
$cursor = $manager->executeQuery('db.collection', $query);

var_dump($cursor->toArray());

?>

   
```

The above example will output something similar to:

```text


array(3) {
  [0]=>
  object(stdClass)#6 (2) {
    ["_id"]=>
    object(MongoDB\BSON\ObjectId)#5 (1) {
      ["oid"]=>
      string(24) "564259a96118fd40b41bcf61"
    }
    ["x"]=>
    int(1)
  }
  [1]=>
  object(stdClass)#8 (2) {
    ["_id"]=>
    object(MongoDB\BSON\ObjectId)#7 (1) {
      ["oid"]=>
      string(24) "564259a96118fd40b41bcf62"
    }
    ["x"]=>
    int(2)
  }
  [2]=>
  object(stdClass)#10 (2) {
    ["_id"]=>
    object(MongoDB\BSON\ObjectId)#9 (1) {
      ["oid"]=>
      string(24) "564259a96118fd40b41bcf63"
    }
    ["x"]=>
    int(3)
  }
}

   
```

## See Also

 `MongoDB\Driver\Cursor::setTypeMap()`
