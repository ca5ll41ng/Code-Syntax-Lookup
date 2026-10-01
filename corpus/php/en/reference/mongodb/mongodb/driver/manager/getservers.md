---
id: "en-php-function-mongodb-driver-manager-getservers"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::getServers"
title: "Return the servers to which this manager is connected"
signature: "final public array MongoDB\\Driver\\Manager::getServers()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.getservers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the servers to which this manager is connected

## Description

```php
final public array MongoDB\Driver\Manager::getServers()
```

Returns an `array` of `MongoDB\Driver\Server` instances to which this manager is connected.

> Since the driver connects to the database lazily, this method may return an empty `array` if called before executing an operation on the `MongoDB\Driver\Manager`.

## Parameters

This function has no parameters.

## Return Values

Returns an `array` of `MongoDB\Driver\Server` instances to which this manager is connected.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Manager::getServers()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017");

/* The driver connects to the database server lazily, so Manager::getServers()
 * may initially return an empty array. */
var_dump($manager->getServers());

$command = new MongoDB\Driver\Command(['ping' => 1]);
$manager->executeCommand('db', $command);

var_dump($manager->getServers());

?>

   
```

The above example will output something similar to:

```text


array(0) {
}
array(1) {
  [0]=>
  object(MongoDB\Driver\Server)#3 (10) {
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
      object(MongoDB\BSON\UTCDateTime)#4 (1) {
        ["milliseconds"]=>
        int(1447267964517)
      }
      ["maxWireVersion"]=>
      int(3)
      ["minWireVersion"]=>
      int(0)
      ["ok"]=>
      float(1)
    }
    ["round_trip_time"]=>
    int(554)
  }
}

   
```

## See Also

 `MongoDB\Driver\Server` `MongoDB\Driver\Manager::selectServer()`
