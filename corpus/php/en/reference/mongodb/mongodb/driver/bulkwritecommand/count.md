---
id: "en-php-function-mongodb-driver-bulkwritecommand-count"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWriteCommand::count"
title: "Count number of write operations in the BulkWriteCommand"
signature: "public int MongoDB\\Driver\\BulkWriteCommand::count()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwritecommand.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Count number of write operations in the BulkWriteCommand

## Description

```php
public int MongoDB\Driver\BulkWriteCommand::count()
```

Returns the number of write operations added to the `MongoDB\Driver\BulkWriteCommand` object.

## Parameters

This function has no parameters.

## Return Values

Returns number of write operations added to the `MongoDB\Driver\BulkWriteCommand` object.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\BulkWriteCommand::count()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWriteCommand;
$bulk->insertOne('db.coll', ['_id' => 1, 'x' => 1]);
$bulk->insertOne('db.coll', ['_id' => 2, 'x' => 2]);
$bulk->updateOne('db.coll', ['x' => 2], ['$set' => ['x' => 1]]);
$bulk->deleteMany('db.coll', ['x' => 1]);

var_dump(count($bulk));

?>

   
```

The above example will output:

```text


int(4)

   
```
