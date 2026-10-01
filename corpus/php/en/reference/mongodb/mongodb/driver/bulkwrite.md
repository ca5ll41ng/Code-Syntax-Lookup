---
id: "en-php-guide-class-mongodb-driver-bulkwrite"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-bulkwrite"
title: "The MongoDB\\Driver\\BulkWrite class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-bulkwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\BulkWrite class

MongoDB\Driver\BulkWrite

   Introduction  The `MongoDB\Driver\BulkWrite` collects one or more write operations that should be sent to the server. After adding any number of insert, update, and delete operations, the collection may be executed via `MongoDB\Driver\Manager::executeBulkWrite()`.    Write operations may either be ordered (default) or unordered. Ordered write operations are sent to the server, in the order provided, for serial execution. If a write fails, any remaining operations will be aborted. Unordered operations are sent to the server in an arbitrary order where they may be executed in parallel. Any errors that occur are reported after all operations have been attempted.      Class Synopsis   `MongoDB\Driver\BulkWrite`   `final`  `MongoDB\Driver\BulkWrite`   Countable          Examples 
**Mixed write operations are grouped by type**

Mixed write operations (i.e. inserts, updates, and deletes) will be assembled into typed write commands to be sent sequentially to the server.

```php

<?php

$bulk = new MongoDB\Driver\BulkWrite(['ordered' => true]);
$bulk->insert(['_id' => 1, 'x' => 1]);
$bulk->insert(['_id' => 2, 'x' => 2]);
$bulk->update(['x' => 2], ['$set' => ['x' => 1]]);
$bulk->insert(['_id' => 3, 'x' => 3]);
$bulk->delete(['x' => 1]);

?>

    
```

Will result in four write commands (i.e. roundtrips) being executed. Since the operations are ordered, the third insertion cannot be sent until the preceding update is executed.

 
**Ordered write operations causing an error**

```php

<?php

$bulk = new MongoDB\Driver\BulkWrite(['ordered' => true]);
$bulk->delete([]);
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 2]);
$bulk->insert(['_id' => 3, 'hello' => 'world']);
$bulk->update(['_id' => 3], ['$set' => ['hello' => 'earth']]);
$bulk->insert(['_id' => 4, 'hello' => 'pluto']);
$bulk->update(['_id' => 4], ['$set' => ['hello' => 'moon']]);
$bulk->insert(['_id' => 3]);
$bulk->insert(['_id' => 4]);
$bulk->insert(['_id' => 5]);

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
$writeConcern = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 1000);

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

?>

    
```

 The above example will output:  
```text

Operation#7: E11000 duplicate key error index: db.collection.$_id_ dup key: { : 3 } (11000)
Inserted 4 document(s)
Updated  2 document(s)

   
```

  If the write concern could not be fulfilled, the example above would output something like:   
```text

waiting for replication timed out (64): array (
  'wtimeout' => true,
)
Operation#7: E11000 duplicate key error index: databaseName.collectionName.$_id_ dup key: { : 3 } (11000)
Inserted 4 document(s)
Updated  2 document(s)

   
```

  If we execute the example above, but allow for unordered writes:   
```php

<?php

$bulk = new MongoDB\Driver\BulkWrite(['ordered' => false]);
/* ... */

?>

   
```

 The above example will output:  
```text

Operation#7: E11000 duplicate key error index: db.collection.$_id_ dup key: { : 3 } (11000)
Operation#8: E11000 duplicate key error index: db.collection.$_id_ dup key: { : 4 } (11000)
Inserted 5 document(s)
Updated  2 document(s)

   
```

   See Also  `MongoDB\Driver\Manager::executeBulkWrite()` `MongoDB\Driver\WriteResult` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\WriteConcernError` `MongoDB\Driver\WriteError`
