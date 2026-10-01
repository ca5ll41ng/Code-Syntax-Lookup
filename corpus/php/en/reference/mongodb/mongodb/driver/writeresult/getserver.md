---
id: "en-php-function-mongodb-driver-writeresult-getserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteResult::getServer"
title: "Returns the server associated with this write result"
signature: "final public MongoDB\\Driver\\Server MongoDB\\Driver\\WriteResult::getServer()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeresult.getserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server associated with this write result

## Description

```php
final public MongoDB\Driver\Server MongoDB\Driver\WriteResult::getServer()
```

Returns the `MongoDB\Driver\Server` associated with this write result. This is the server that executed the `MongoDB\Driver\BulkWrite`.

## Parameters

This function has no parameters.

## Return Values

Returns the `MongoDB\Driver\Server` associated with this write result.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteResult::getServer()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;
$server = $manager->selectServer();

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['x' => 1]);

$result = $server->executeBulkWrite('db.collection', $bulk);

var_dump($result->getServer() == $server);

?>

   
```

The above example will output:

```text


bool(true)

   
```

## See Also

 `MongoDB\Driver\Server`
