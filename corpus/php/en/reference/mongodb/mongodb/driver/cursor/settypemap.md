---
id: "en-php-function-mongodb-driver-cursor-settypemap"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::setTypeMap"
title: "Sets a type map to use for BSON unserialization"
signature: "final public void MongoDB\\Driver\\Cursor::setTypeMap(array $typemap)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.settypemap.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets a type map to use for BSON unserialization

## Description

```php
final public void MongoDB\Driver\Cursor::setTypeMap(array $typemap)
```

Sets the type map configuration to use when unserializing the BSON results into PHP values.

## Parameters

- **`$typeMap` (`array`)** — Type map configuration.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

When iterating over the cursor, the following exceptions can also be thrown due to an incorrect type map configuration: Throws `MongoDB\Driver\Exception\InvalidArgumentException` if a class in the type map cannot be instantiated or does not implement MongoDB\BSON\Unserializable.

## Examples

**`MongoDB\Driver\Cursor::setTypeMap()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

$bulk = new MongoDB\Driver\BulkWrite;
$id = $bulk->insert(['x' => 1]);
$manager->executeBulkWrite('db.collection', $bulk);

$query = new MongoDB\Driver\Query(['_id' => $id]);
$cursor = $manager->executeQuery('db.collection', $query);
$cursor->setTypeMap(['root' => 'array']);

foreach ($cursor as $document) {
    var_dump($document);
}

?>

   
```

The above example will output something similar to:

```text


array(2) {
  ["_id"]=>
  object(MongoDB\BSON\ObjectId)#6 (1) {
    ["oid"]=>
    string(24) "56424fb76118fd3267180741"
  }
  ["x"]=>
  int(1)
}

   
```

## See Also

 `mongodb.persistence`
