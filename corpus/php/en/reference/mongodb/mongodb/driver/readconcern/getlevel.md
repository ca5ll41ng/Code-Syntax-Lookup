---
id: "en-php-function-mongodb-driver-readconcern-getlevel"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadConcern::getLevel"
title: "Returns the ReadConcern's \"level\" option"
signature: "final public string|null MongoDB\\Driver\\ReadConcern::getLevel()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readconcern.getlevel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ReadConcern's "level" option

## Description

```php
final public string|null MongoDB\Driver\ReadConcern::getLevel()
```

## Parameters

This function has no parameters.

## Return Values

Returns the ReadConcern's "level" option.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadConcern::getLevel()` example**

```php


<?php

$rc = new MongoDB\Driver\ReadConcern();
var_dump($rc->getLevel());

$rc = new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::LOCAL);
var_dump($rc->getLevel());

$rc = new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::MAJORITY);
var_dump($rc->getLevel());

?>

   
```

The above example will output:

```text


NULL
string(5) "local"
string(8) "majority"

   
```

## See Also

 [Read Concern reference]()
