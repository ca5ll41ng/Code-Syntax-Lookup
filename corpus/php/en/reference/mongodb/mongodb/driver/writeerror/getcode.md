---
id: "en-php-function-mongodb-driver-writeerror-getcode"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteError::getCode"
title: "Returns the WriteError's error code"
signature: "final public int MongoDB\\Driver\\WriteError::getCode()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeerror.getcode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteError's error code

## Description

```php
final public int MongoDB\Driver\WriteError::getCode()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteError's error code.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteError::getCode()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 1]);

try {
    $manager->executeBulkWrite('db.collection', $bulk);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteErrors()[0]->getCode());
}

?>

   
```

The above example will output something similar to:

```text


int(11000)

   
```
