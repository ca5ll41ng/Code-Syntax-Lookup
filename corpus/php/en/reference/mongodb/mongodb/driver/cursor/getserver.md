---
id: "en-php-function-mongodb-driver-cursor-getserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Cursor::getServer"
title: "Returns the server associated with this cursor"
signature: "final public MongoDB\\Driver\\Server MongoDB\\Driver\\Cursor::getServer()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-cursor.getserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server associated with this cursor

## Description

```php
final public MongoDB\Driver\Server MongoDB\Driver\Cursor::getServer()
```

Returns the `MongoDB\Driver\Server` associated with this cursor. This is the server that executed the `MongoDB\Driver\Query` or `MongoDB\Driver\Command`.

## Parameters

This function has no parameters.

## Return Values

Returns the `MongoDB\Driver\Server` associated with this cursor.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Cursor::getServer()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");
$query = new MongoDB\Driver\Query([]);

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);
$manager->executeBulkWrite('db.collection', $bulk);

$cursor = $manager->executeQuery('db.collection', $query);
var_dump($cursor->getServer());

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\Driver\Server)#5 (10) {
  ["host"]=>
  string(9) "localhost"
  ["port"]=>
  int(27017)
  ["type"]=>
  int(1)
  ["is_primary"]=>
  bool(false)
  ["is_secondary"]=>
  bool(false)
  ["is_arbiter"]=>
  bool(false)
  ["is_hidden"]=>
  bool(false)
  ["is_passive"]=>
  bool(false)
  ["last_hello_response"]=>
  array(8) {
    ["isWritablePrimary"]=>
    bool(true)
    ["maxBsonObjectSize"]=>
    int(16777216)
    ["maxMessageSizeBytes"]=>
    int(48000000)
    ["maxWriteBatchSize"]=>
    int(1000)
    ["localTime"]=>
    object(MongoDB\BSON\UTCDateTime)#6 (1) {
      ["milliseconds"]=>
      int(1446505367907)
    }
    ["maxWireVersion"]=>
    int(3)
    ["minWireVersion"]=>
    int(0)
    ["ok"]=>
    float(1)
  }
  ["round_trip_time"]=>
  int(584)
}

   
```

## See Also

 `MongoDB\Driver\Server`
