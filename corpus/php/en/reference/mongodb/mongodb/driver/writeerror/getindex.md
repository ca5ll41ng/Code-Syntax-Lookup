---
id: "en-php-function-mongodb-driver-writeerror-getindex"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteError::getIndex"
title: "Returns the index of the write operation corresponding to this WriteError"
signature: "final public int MongoDB\\Driver\\WriteError::getIndex()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeerror.getindex.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the index of the write operation corresponding to this WriteError

## Description

```php
final public int MongoDB\Driver\WriteError::getIndex()
```

## Parameters

This function has no parameters.

## Return Values

Returns the index of the write operation (from `MongoDB\Driver\BulkWrite`) corresponding to this WriteError.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteError::getIndex()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 1]);

try {
    $manager->executeBulkWrite('db.collection', $bulk);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteErrors()[0]->getIndex());
}

?>

   
```

The above example will output something similar to:

```text


int(1)

   
```

## See Also

 `MongoDB\Driver\BulkWrite`
