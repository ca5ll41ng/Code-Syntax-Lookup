---
id: "en-php-function-mongodb-driver-manager-getreadconcern"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::getReadConcern"
title: "Return the ReadConcern for the Manager"
signature: "final public MongoDB\\Driver\\ReadConcern MongoDB\\Driver\\Manager::getReadConcern()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.getreadconcern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the ReadConcern for the Manager

## Description

```php
final public MongoDB\Driver\ReadConcern MongoDB\Driver\Manager::getReadConcern()
```

Returns the `MongoDB\Driver\ReadConcern` for the Manager, which is derived from its URI options. This is the default read concern for queries and commands executed on the Manager.

## Parameters

This function has no parameters.

## Return Values

The `MongoDB\Driver\ReadConcern` for the Manager.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\Manager::getReadConcern()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017');
var_dump($manager->getReadConcern());

$manager = new MongoDB\Driver\Manager('mongodb://localhost:27017/?readConcernLevel=local');
var_dump($manager->getReadConcern());

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\Driver\ReadConcern)#2 (0) {
}
object(MongoDB\Driver\ReadConcern)#1 (1) {
  ["level"]=>
  string(5) "local"
}

   
```

## See Also

 `MongoDB\Driver\ReadConcern` `MongoDB\Driver\Manager::__construct()`
