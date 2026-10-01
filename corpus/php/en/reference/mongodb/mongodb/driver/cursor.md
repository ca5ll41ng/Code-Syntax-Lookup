---
id: "en-php-guide-class-mongodb-driver-cursor"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-cursor"
title: "The MongoDB\\Driver\\Cursor class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-cursor.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Cursor class

MongoDB\Driver\Cursor

   Introduction  The `MongoDB\Driver\Cursor` class encapsulates the results of a MongoDB command or query and may be returned by `MongoDB\Driver\Manager::executeCommand()` or `MongoDB\Driver\Manager::executeQuery()`, respectively.      Class Synopsis   `MongoDB\Driver\Cursor`   `final`  `MongoDB\Driver\Cursor`   MongoDB\Driver\CursorInterface          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 1.9.0 | Implements Iterator. |
| PECL mongodb 1.6.0 | Implements MongoDB\Driver\CursorInterface, which extends Traversable. |

   Examples 
**Reading a result set**

`MongoDB\Driver\Manager::executeCommand()` and `MongoDB\Driver\Manager::executeQuery()` both return their result(s) as a `MongoDB\Driver\Cursor` object. This object can be used to iterate over the result set of the command or query.

Because `MongoDB\Driver\Cursor` implements the Traversable interface, you can simply iterate over the result set with `foreach`.

```php

<?php

$manager = new MongoDB\Driver\Manager();

/* Insert some documents so that our query returns information */
$bulkWrite = new MongoDB\Driver\BulkWrite;
$bulkWrite->insert(['name' => 'Ceres', 'size' => 946, 'distance' => 2.766]);
$bulkWrite->insert(['name' => 'Vesta', 'size' => 525, 'distance' => 2.362]);
$manager->executeBulkWrite("test.asteroids", $bulkWrite);

/* Query for all the items in the collection */
$query = new MongoDB\Driver\Query( [] );

/* Query the "asteroids" collection of the "test" database */
$cursor = $manager->executeQuery("test.asteroids", $query);

/* $cursor now contains an object that wraps around the result set. Use
 * foreach() to iterate over all the result */
foreach($cursor as $document) {
    print_r($document);
}

?>

   
```

The above example will output something similar to:

```text

stdClass Object
(
    [_id] => MongoDB\BSON\ObjectId Object
        (
            [oid] => 5a4cff2f122d3321565d8cc2
        )

    [name] => Ceres
    [size] => 946
    [distance] => 2.766
)
stdClass Object
(
    [_id] => MongoDB\BSON\ObjectId Object
        (
            [oid] => 5a4cff2f122d3321565d8cc3
        )

    [name] => Vesta
    [size] => 525
    [distance] => 2.362
)

    
```

 
**Reading a result set for a tailable cursor**

[Tailable cursors](core/tailable-cursors) are a special type of MongoDB cursor that allows the client to read some results and then wait until more documents become available. These cursors are primarily used with [Capped Collections](core/capped-collections) and [Change Streams](changeStreams).

While normal cursors can be iterated once with `foreach`, that approach will not work with tailable cursors. When `foreach` is used with a tailable cursor, the loop will stop upon reaching the end of the initial result set. Attempting to continue iteration on the cursor with a second `foreach` would throw an exception, since PHP attempts to rewind the cursor. Similar to result objects in other database drivers, cursors in MongoDB only support forward iteration, which means they cannot be rewound.

In order to continuously read from a tailable cursor, the Cursor object must be wrapped with an `IteratorIterator`. This allows the application to directly control the cursor's iteration, avoid inadvertently rewinding the cursor, and decide when to wait for new results or stop iteration entirely.

In order to demonstrate a tailable cursor in action, two scripts will be used: a "producer" and a "consumer". The producer script will create a new capped collection using the [create](create) command and proceed to insert a new document into that collection each second.

```php

<?php

$manager = new MongoDB\Driver\Manager;

$manager->executeCommand('test', new MongoDB\Driver\Command([
    'create' => 'asteroids',
    'capped' => true,
    'size' => 1048576,
]));

while (true) {
    $bulkWrite = new MongoDB\Driver\BulkWrite;
    $bulkWrite->insert(['createdAt' => new MongoDB\BSON\UTCDateTime]);
    $manager->executeBulkWrite('test.asteroids', $bulkWrite);

    sleep(1);
}

?>

    
```

With the producer script still running, a second consumer script may be executed to read the inserted documents using a tailable cursor, indicated by the `tailable` and `awaitData` options to `MongoDB\Driver\Query::__construct()`.

```php

<?php

$manager = new MongoDB\Driver\Manager;

$query = new MongoDB\Driver\Query([], [
    'tailable' => true,
    'awaitData' => true,
]);

$cursor = $manager->executeQuery('test.asteroids', $query);

$iterator = new IteratorIterator($cursor);

$iterator->rewind();

while (true) {
    if ($iterator->valid()) {
        $document = $iterator->current();
        printf("Consumed document created at: %s\n", $document->createdAt);
    }

    $iterator->next();
}

?>

    
```

The consumer script will start by quickly printing all available documents in the capped collection (as if `foreach` had been used); however, it will not terminate upon reaching the end of the initial result set. Since the cursor is tailable, calling `IteratorIterator::next()` will block and wait for additional results. `IteratorIterator::valid()` is also used to check if there is actually data available to read at each step.

> This example uses the `awaitData` query option to instruct the server to block for a short period (e.g. one second) at the end of the result set before returning a response to the driver. This is used to prevent the driver from aggressively polling the server when there are no results available. The `maxAwaitTimeMS` option may be used in conjunction with `tailable` and `awaitData` to specify the amount of time that the server should block when it reaches the end of the result set.

   Errors/Exceptions  When iterating over the cursor object, BSON data is converted into PHP variables. This iteration can cause the following Exceptions:     Throws `MongoDB\Driver\Exception\InvalidArgumentException` if a class in the type map cannot be instantiated or does not implement MongoDB\BSON\Unserializable.  Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the input did not contain exactly one BSON document. Possible reasons include, but are not limited to, invalid BSON, extra data (after reading one BSON document), or an unexpected [libbson]() error.
