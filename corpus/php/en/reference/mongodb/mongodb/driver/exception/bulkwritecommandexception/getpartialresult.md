---
id: "en-php-function-mongodb-driver-bulkwritecommandexception-getpartialresult"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Exception\\BulkWriteCommandException::getPartialResult"
title: "Returns the result of any successful write operations"
signature: "final public MongoDB\\Driver\\BulkWriteCommandResult|null MongoDB\\Driver\\Exception\\BulkWriteCommandException::getPartialResult()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandexception.getpartialresult.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the result of any successful write operations

## Description

```php
final public MongoDB\Driver\BulkWriteCommandResult|null MongoDB\Driver\Exception\BulkWriteCommandException::getPartialResult()
```

## Parameters

This function has no parameters.

## Return Values

Returns a `MongoDB\Driver\BulkWriteCommandResult` reporting the result of any successful operations that were performed before the error was encountered. The return value will be `null` if it cannot be determined that at least one write was successfully performed (and acknowledged).

## Examples

**Partial result if at least one write is successful**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->deleteMany('db.coll', []);
$bulk->insertOne('db.coll', ['_id' => 1]);
$bulk->insertOne('db.coll', ['_id' => 1]);

try {
    $result = $manager->executeBulkWriteCommand($bulk);
} catch (MongoDB\Driver\Exception\BulkWriteCommandException $e) {
    $result = $e->getPartialResult();
}

var_dump($result?->getInsertedCount());

?>

   
```

The above example will output:

```text


int(1)

   
```

**No partial result if no writes are successful**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->deleteMany('db.coll', []);
$bulk->insertOne('db.coll', ['_id' => 1]);
$manager->executeBulkWriteCommand($bulk);

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->insertOne('db.coll', ['_id' => 1]);

try {
    $result = $manager->executeBulkWriteCommand($bulk);
} catch (MongoDB\Driver\Exception\BulkWriteCommandException $e) {
    $result = $e->getPartialResult();
}

var_dump($result?->getInsertedCount());

?>

   
```

The above example will output:

```text


NULL

   
```

## See Also

 `MongoDB\Driver\BulkWriteCommandResult` `MongoDB\Driver\Manager::executeBulkWriteCommand()`
