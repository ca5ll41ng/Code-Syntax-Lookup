---
id: "en-php-function-mongodb-driver-cursorid-tostring"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\CursorId::__toString"
title: "String representation of the cursor ID"
signature: "final public string MongoDB\\Driver\\CursorId::__toString()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursorid.tostring.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# String representation of the cursor ID

## Description

```php
final public string MongoDB\Driver\CursorId::__toString()
```

Returns the `string` representation of the cursor ID.

## Parameters

This function has no parameters.

## Return Values

Returns the `string` representation of the cursor ID.

## Examples

**`MongoDB\Driver\CursorId::__toString()` example**

```php


<?php

/* In this example, we insert several documents into the collection and specify
 * a smaller batchSize to ensure that the first batch contains only a subset of
 * our results and the cursor remains open on the server. */
$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");
$query = new MongoDB\Driver\Query([], ['batchSize' => 2]);

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$bulk->insert(['x' => 2]);
$bulk->insert(['x' => 3]);
$manager->executeBulkWrite('db.collection', $bulk);

$cursor = $manager->executeQuery('db.collection', $query);
var_dump((string) $cursor->getId());

?>

   
```

The above example will output something similar to:

```text


string(11) "98061641158"

   
```

## See Also

 `MongoDB\Driver\Cursor::getId()`
