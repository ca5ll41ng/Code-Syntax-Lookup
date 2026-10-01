---
id: "en-php-function-mongodb-driver-bulkwrite-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWrite::__construct"
title: "Create a new BulkWrite"
signature: "public MongoDB\\Driver\\BulkWrite::__construct(array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwrite.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new BulkWrite

## Description

```php
public MongoDB\Driver\BulkWrite::__construct(array|null $options = null)
```

Constructs a new `MongoDB\Driver\BulkWrite`, which is a mutable object to which one or more write operations may be added. The write(s) may then be executed with `MongoDB\Driver\Manager::executeBulkWrite()`.

## Parameters

- **`$options` (`array`)** — | Option | Type | Description | Default | | --- | --- | --- | --- | | bypassDocumentValidation | `bool` | If `true`, allows insert and update operations to circumvent document level validation. This option is available in MongoDB 3.2+ and is ignored for older server versions, which do not support document level validation. | `false` | | comment | `mixed` | An arbitrary comment to help trace the operation through the database profiler, currentOp output, and logs. This option is available in MongoDB 4.4+ and will result in an exception at execution time if specified for an older server version. | | let | `array\|object` | Map of parameter names and values. Values must be constant or closed expressions that do not reference document fields. Parameters can then be accessed as variables in an aggregate expression context (e.g. `$$var`). This option is available in MongoDB 5.0+ and will result in an exception at execution time if specified for an older server version. | | ordered | `bool` | Ordered operations (`true`) are executed serially on the MongoDB server, while unordered operations (`false`) are sent to the server in an arbitrary order and may be executed in parallel. | `true` |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.14.0 | Added the `"comment"` and `"let"` options. |
| PECL mongodb 1.1.0 | Added the `"bypassDocumentValidation"` option. |

## Examples

**`MongoDB\Driver\BulkWrite::__construct()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWrite(['ordered' => true]);
$bulk->delete([]);
$bulk->insert(['_id' => 1, 'x' => 1]);
$bulk->insert(['_id' => 2, 'x' => 2]);
$bulk->update(
    ['x' => 2],
    ['$set' => ['x' => 1]],
    ['limit' => 1, 'upsert' => false]
);
$bulk->delete(['x' => 1], ['limit' => 1]);
$bulk->update(
    ['_id' => 3],
    ['$set' => ['x' => 3]],
    ['limit' => 1, 'upsert' => true]
);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$writeConcern = new MongoDB\Driver\WriteConcern(1);

try {
    $result = $manager->executeBulkWrite('db.collection', $bulk, ['writeConcern' => $writeConcern]);
} catch (MongoDB\Driver\Exception\BulkWriteException $e) {
    $result = $e->getWriteResult();

    // Check if the write concern could not be fulfilled
    if ($writeConcernError = $result->getWriteConcernError()) {
        printf("%s (%d): %s\n",
            $writeConcernError->getMessage(),
            $writeConcernError->getCode(),
            var_export($writeConcernError->getInfo(), true)
        );
    }

    // Check if any write operations did not complete at all
    foreach ($result->getWriteErrors() as $writeError) {
        printf("Operation#%d: %s (%d)\n",
            $writeError->getIndex(),
            $writeError->getMessage(),
            $writeError->getCode()
        );
    }
} catch (MongoDB\Driver\Exception\Exception $e) {
    printf("Other error: %s\n", $e->getMessage());
    exit;
}

printf("Inserted %d document(s)\n", $result->getInsertedCount());
printf("Updated  %d document(s)\n", $result->getModifiedCount());
printf("Upserted %d document(s)\n", $result->getUpsertedCount());
printf("Deleted  %d document(s)\n", $result->getDeletedCount());

?>

   
```

The above example will output:

```text


Inserted 2 document(s)
Updated  1 document(s)
Upserted 1 document(s)
Deleted  1 document(s)

   
```

## See Also

 `MongoDB\Driver\Manager::executeBulkWrite()` `MongoDB\Driver\WriteResult`
