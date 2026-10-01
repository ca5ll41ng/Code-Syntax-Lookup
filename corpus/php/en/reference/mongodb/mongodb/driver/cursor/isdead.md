---
id: "en-php-function-mongodb-driver-cursor-isdead"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::isDead"
title: "Checks if the cursor is exhausted or may have additional results"
signature: "final public bool MongoDB\\Driver\\Cursor::isDead()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.isdead.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the cursor is exhausted or may have additional results

## Description

```php
final public bool MongoDB\Driver\Cursor::isDead()
```

Checks whether there are definitely no additional results available on the cursor. This method is similar to the [cursor.isExhausted()](reference/method/cursor.isExhausted/) method in the MongoDB shell and is primarily useful when iterating [tailable cursors](core/tailable-cursors/).

A cursor has no additional results and is considered "dead" when one of the following is true: The current batch has been fully iterated *and* the cursor ID is zero (i.e. a [getMore](reference/command/getMore/) cannot be issued). An error was encountered while iterating the cursor. The cursor reached its configured limit.

By design, it is not possible to always determine whether a cursor has additional results. The cases where a cursor *may* have more data available is as follows: There are additional documents in the current batch, which are buffered on the client side. Iterating will fetch a document from the local buffer. There are no additional documents in the current batch (i.e. local buffer), but the cursor ID is non-zero. Iterating will request more documents from the server via a [getMore](reference/command/getMore/) operation, which may or may not return additional results and/or indicate that the cursor has been closed on the server by returning zero for its ID.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if there are definitely no additional results available on the cursor, and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Cursor::isDead()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");
$query = new MongoDB\Driver\Query([]);

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->insert(['x' => 2]);
$bulk->insert(['x' => 3]);
$manager->executeBulkWrite('db.collection', $bulk);

$cursor = $manager->executeQuery('db.collection', $query);

$iterator = new IteratorIterator($cursor);

$iterator->rewind();
var_dump($cursor->isDead());

$iterator->next();
var_dump($cursor->isDead());

$iterator->next();
var_dump($cursor->isDead());

$iterator->next();
var_dump($cursor->isDead());

?>

   
```

The above example will output:

```text


bool(false)
bool(false)
bool(false)
bool(true)

   
```

## See Also

 [Tailable Cursors](core/tailable-cursors/) in the MongoDB manual [cursor.isExhausted()](reference/method/cursor.isExhausted/) in the MongoDB manual
