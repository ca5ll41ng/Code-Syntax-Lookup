---
id: "en-php-function-mongodb-driver-writeresult-getmatchedcount"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteResult::getMatchedCount"
title: "Returns the number of documents selected for update"
signature: "final public int MongoDB\\Driver\\WriteResult::getMatchedCount()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeresult.getmatchedcount.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the number of documents selected for update

## Description

```php
final public int MongoDB\Driver\WriteResult::getMatchedCount()
```

If the update operation results in no change to the document (e.g. setting the value of a field to its current value), the matched count may be greater than the value returned by `MongoDB\Driver\WriteResult::getModifiedCount()`.

## Parameters

This function has no parameters.

## Return Values

Returns the number of documents selected for update.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\LogicException` if the write was not acknowledged. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This method now throws an exception when called for an unacknowledged write instead of returning `null`. |

## Examples

**`MongoDB\Driver\WriteResult::getMatchedCount()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->update(['x' => 1], ['$set' => ['y' => 3]]);
$bulk->update(['x' => 2], ['$set' => ['y' => 1]], ['upsert' => true]);
$bulk->update(['x' => 3], ['$set' => ['y' => 2]], ['upsert' => true]);
$bulk->delete(['x' => 1]);

$result = $manager->executeBulkWrite('db.collection', $bulk);

var_dump($result->getMatchedCount());

?>

   
```

The above example will output:

```text


int(1)

   
```

## See Also

 `MongoDB\Driver\WriteResult::getModifiedCount()` `MongoDB\Driver\WriteResult::isAcknowledged()`
