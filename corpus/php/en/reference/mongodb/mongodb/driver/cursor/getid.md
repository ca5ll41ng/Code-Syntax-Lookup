---
id: "en-php-function-mongodb-driver-cursor-getid"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::getId"
title: "Returns the ID for this cursor"
signature: "final public MongoDB\\BSON\\Int64 MongoDB\\Driver\\Cursor::getId()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.getid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ID for this cursor

## Description

```php
final public MongoDB\BSON\Int64 MongoDB\Driver\Cursor::getId()
```

Returns the ID for this cursor, which uniquely identifies the cursor on the server.

## Parameters

This function has no parameters.

## Return Values

Returns the ID for this cursor. The ID will be returned as a `MongoDB\BSON\Int64` object.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The return type was changed to `MongoDB\BSON\Int64`. The `$asInt64` parameter was removed. |
| PECL mongodb 1.20.0 | Deprecated returning a `MongoDB\Driver\CursorId`. Added the `$asInt64` argument to ease migration for future versions. If `$asInt64` is `true`, the ID will be returned as a `MongoDB\BSON\Int64`. |

## Examples

**`MongoDB\Driver\Cursor::getId()` example**

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
var_dump($cursor->getId(true));

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\BSON\Int64)#5 (1) {
  ["integer"]=>
  string(11) "94810124093"
}

   
```

## See Also

 `MongoDB\BSON\Int64`
