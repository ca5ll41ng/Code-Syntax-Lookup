---
id: "en-php-function-mongodb-driver-writeexception-getwriteresult"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Exception\\WriteException::getWriteResult"
title: "Returns the WriteResult for the failed write operation"
signature: "final public MongoDB\\Driver\\WriteResult MongoDB\\Driver\\Exception\\WriteException::getWriteResult()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeexception.getwriteresult.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteResult for the failed write operation

## Description

```php
final public MongoDB\Driver\WriteResult MongoDB\Driver\Exception\WriteException::getWriteResult()
```

Returns the `MongoDB\Driver\WriteResult` for the failed write operation. The `MongoDB\Driver\WriteResult::getWriteErrors()` and `MongoDB\Driver\WriteResult::getWriteConcernError()` methods may be used to get more details about the failure.

## Parameters

This function has no parameters.

## Return Values

The `MongoDB\Driver\WriteResult` for the failed write operation.

## Examples

**`MongoDB\Driver\Exception\WriteException::getWriteResult()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost');
$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 1]);

try {
    $manager->executeBulkWrite('db.collection', $bulk);
} catch (MongoDB\Driver\Exception\WriteException $e) {
    $writeResult = $e->getWriteResult();

    if ($writeConcernError = $writeResult->getWriteConcernError()) {
        var_dump($writeConcernError);
    }

    if ($writeErrors = $writeResult->getWriteErrors()) {
        var_dump($writeErrors);
    }
}

?>

   
```

The above example will output something similar to:

```text


array(1) {
  [0]=>
  object(MongoDB\Driver\WriteError)#5 (4) {
    ["message"]=>
    string(70) "E11000 duplicate key error index: db.collection.$_id_ dup key: { : 1 }"
    ["code"]=>
    int(11000)
    ["index"]=>
    int(1)
    ["info"]=>
    NULL
  }
}

   
```

## See Also

 `MongoDB\Driver\WriteResult` `MongoDB\Driver\Manager::executeBulkWrite()`
