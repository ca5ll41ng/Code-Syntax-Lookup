---
id: "en-php-function-mongodb-driver-bulkwrite-insert"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWrite::insert"
title: "Add an insert operation to the bulk"
signature: "public mixed MongoDB\\Driver\\BulkWrite::insert(array|object $document)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwrite.insert.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add an insert operation to the bulk

## Description

```php
public mixed MongoDB\Driver\BulkWrite::insert(array|object $document)
```

Adds an insert operation to the `MongoDB\Driver\BulkWrite`.

## Parameters

- **`$document` (`array|object`)** — A document to insert.

## Return Values

Returns the `_id` of the inserted document. If the `$document` did not have an `_id`, the `MongoDB\BSON\ObjectId` generated for the insert will be returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.3.0 | The `_id` of the inserted document is always returned. Previously, the method only returned a value if a `MongoDB\BSON\ObjectId` was generated. |

## Examples

**`MongoDB\Driver\BulkWrite::insert()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWrite;

$doc1 = ['x' => 1];
$doc2 = ['_id' => 'custom-id', 'x' => 2];
$doc3 = ['_id' => new MongoDB\BSON\ObjectId('0123456789abcdef01234567'), 'x' => 3];

$id1 = $bulk->insert($doc1);
$id2 = $bulk->insert($doc2);
$id3 = $bulk->insert($doc3);

var_dump($id1, $id2, $id3);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$result = $manager->executeBulkWrite('db.collection', $bulk);

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\BSON\ObjectId)#3 (1) {
  ["oid"]=>
  string(24) "67f58058d1a0aa2fd80d55d0"
}
string(9) "custom-id"
object(MongoDB\BSON\ObjectId)#4 (1) {
  ["oid"]=>
  string(24) "0123456789abcdef01234567"
}

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWrite()` `MongoDB\Driver\WriteResult` `MongoDB\BSON\ObjectId` MongoDB\BSON\Persistable
