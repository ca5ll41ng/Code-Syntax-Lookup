---
id: "en-php-function-mongodb-driver-readconcern-isdefault"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadConcern::isDefault"
title: "Checks if this is the default read concern"
signature: "final public bool MongoDB\\Driver\\ReadConcern::isDefault()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readconcern.isdefault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if this is the default read concern

## Description

```php
final public bool MongoDB\Driver\ReadConcern::isDefault()
```

Returns whether this is the default read concern (i.e. no options are specified). This method is primarily intended to be used in conjunction with `MongoDB\Driver\Manager::getReadConcern()` to determine whether the Manager has been constructed without any read concern options.

The driver will not include a default read concern in its read operations (e.g. `MongoDB\Driver\Manager::executeQuery()`) in order to allow the server to apply its own default. Libraries that access the Manager's read concern to include it in their own read commands should use this method to ensure that default read concerns are left unset.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if this is the default read concern and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadConcern::isDefault()` example**

```php


<?php

$rc = new MongoDB\Driver\ReadConcern(null);
var_dump($rc->isDefault());

$rc = new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::MAJORITY);
var_dump($rc->isDefault());

$manager = new MongoDB\Driver\Manager('mongodb://127.0.0.1/?readConcernLevel=majority');
$rc = $manager->getReadConcern();
var_dump($rc->isDefault());

$manager = new MongoDB\Driver\Manager('mongodb://127.0.0.1/');
$rc = $manager->getReadConcern();
var_dump($rc->isDefault());

?>

   
```

The above example will output:

```text


bool(true)
bool(false)
bool(false)
bool(true)

   
```

## See Also

 `MongoDB\Driver\Manager::getReadConcern()` [Read Concern reference]()
