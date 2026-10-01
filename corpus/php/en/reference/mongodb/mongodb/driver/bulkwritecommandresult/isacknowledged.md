---
id: "en-php-function-mongodb-driver-bulkwritecommandresult-isacknowledged"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommandResult::isAcknowledged"
title: "Returns whether the write was acknowledged"
signature: "final public bool MongoDB\\Driver\\BulkWriteCommandResult::isAcknowledged()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommandresult.isacknowledged.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the write was acknowledged

## Description

```php
final public bool MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()
```

If the write is acknowledged, other fields will be available on the `MongoDB\Driver\BulkWriteCommandResult` object.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if the write was acknowledged, and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()` with acknowledged write concern**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->insertOne('db.coll', ['x' => 1]);

$result = $manager->executeBulkWriteCommand($bulk);

var_dump($result->isAcknowledged());

?>

   
```

The above example will output:

```text


bool(true)

   
```

**`MongoDB\Driver\BulkWriteCommandResult::isAcknowledged()` with unacknowledged write concern**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWriteCommand(['ordered' => false]);
$bulk->insertOne('db.coll', ['x' => 1]);

$writeConcern = new MongoDB\Driver\WriteConcern(0);

$result = $manager->executeBulkWriteCommand($bulk, ['writeConcern' => $writeConcern]);

var_dump($result->isAcknowledged());

?>

   
```

The above example will output:

```text


bool(false)

   
```

## See Also

 `MongoDB\Driver\WriteConcern` [Write Concern reference]()
