---
id: "en-php-function-mongodb-driver-manager-getwriteconcern"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::getWriteConcern"
title: "Return the WriteConcern for the Manager"
signature: "final public MongoDB\\Driver\\WriteConcern MongoDB\\Driver\\Manager::getWriteConcern()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.getwriteconcern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the WriteConcern for the Manager

## Description

```php
final public MongoDB\Driver\WriteConcern MongoDB\Driver\Manager::getWriteConcern()
```

Returns the `MongoDB\Driver\WriteConcern` for the Manager, which is derived from its URI options. This is the default write concern for writes and commands executed on the Manager.

## Parameters

This function has no parameters.

## Return Values

The `MongoDB\Driver\WriteConcern` for the Manager.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Manager::getWriteConcern()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
var_dump($manager->getWriteConcern());

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017/?w=majority&wtimeoutMS=2000');
var_dump($manager->getWriteConcern());

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\Driver\WriteConcern)#2 (0) {
}
object(MongoDB\Driver\WriteConcern)#1 (2) {
  ["w"]=>
  string(8) "majority"
  ["wtimeout"]=>
  int(2000)
}

   
```

## See Also

 `MongoDB\Driver\WriteConcern` `MongoDB\Driver\Manager::__construct()`
