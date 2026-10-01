---
id: "en-php-function-mongodb-driver-bulkwrite-count"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\BulkWrite::count"
title: "Count number of write operations in the bulk"
signature: "public int MongoDB\\Driver\\BulkWrite::count()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-bulkwrite.count.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Count number of write operations in the bulk

## Description

```php
public int MongoDB\Driver\BulkWrite::count()
```

Returns the number of write operations added to the `MongoDB\Driver\BulkWrite` object.

## Parameters

This function has no parameters.

## Return Values

Returns number of write operations added to the `MongoDB\Driver\BulkWrite` object.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.2.0 | Returns the number of write operations added to the `MongoDB\Driver\BulkWrite` object. Earlier versions returned the expected number of client-to-server roundtrips required to execute all write operations. |

## Examples

**`MongoDB\Driver\BulkWrite::count()` example**

```php


<?php

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert(['_id' => 1, 'x' => 1]);
$bulk->insert(['_id' => 2, 'x' => 2]);
$bulk->update(['x' => 2], ['$set' => ['x' => 1]]);
$bulk->delete(['x' => 1]);

var_dump(count($bulk));

?>

   
```

The above example will output:

```text


int(4)

   
```
