---
id: "en-php-function-mongodb-driver-writeerror-getmessage"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteError::getMessage"
title: "Returns the WriteError's error message"
signature: "final public string MongoDB\\Driver\\WriteError::getMessage()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeerror.getmessage.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteError's error message

## Description

```php
final public string MongoDB\Driver\WriteError::getMessage()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteError's error message.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteError::getMessage()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager;

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['_id' => 1]);
$bulk->insert(['_id' => 1]);

try {
    $manager->executeBulkWrite('db.collection', $bulk);
} catch(MongoDB\Driver\Exception\BulkWriteException $e) {
    var_dump($e->getWriteResult()->getWriteErrors()[0]->getMessage());
}

?>

   
```

The above example will output something similar to:

```text


string(70) "E11000 duplicate key error index: db.collection.$_id_ dup key: { : 1 }"

   
```
