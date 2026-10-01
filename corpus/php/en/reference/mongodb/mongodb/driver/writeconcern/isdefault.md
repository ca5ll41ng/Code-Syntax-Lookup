---
id: "en-php-function-mongodb-driver-writeconcern-isdefault"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcern::isDefault"
title: "Checks if this is the default write concern"
signature: "final public bool MongoDB\\Driver\\WriteConcern::isDefault()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcern.isdefault.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if this is the default write concern

## Description

```php
final public bool MongoDB\Driver\WriteConcern::isDefault()
```

Returns whether this is the default write concern (i.e. no options are specified). This method is primarily intended to be used in conjunction with `MongoDB\Driver\Manager::getWriteConcern()` to determine whether the Manager has been constructed without any write concern options.

The driver will not include a default write concern in its write operations (e.g. `MongoDB\Driver\Manager::executeBulkWrite()`) in order to allow the server to apply its own default, which may have been [modified](core/replica-set-write-concern/#modify-default-write-concern). Libraries that access the Manager's write concern to include it in their own write commands should use this method to ensure that default write concerns are left unset.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if this is the default write concern and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcern::isDefault()` example**

```php


<?php

$wc = new MongoDB\Driver\WriteConcern(1);
var_dump($wc->isDefault());

$manager = new MongoDB\Driver\Manager('mongodb://127.0.0.1/?w=majority');
$wc = $manager->getWriteConcern();
var_dump($wc->isDefault());

$manager = new MongoDB\Driver\Manager('mongodb://127.0.0.1/');
$wc = $manager->getWriteConcern();
var_dump($wc->isDefault());

?>

   
```

The above example will output:

```text


bool(false)
bool(false)
bool(true)

   
```

## See Also

 `MongoDB\Driver\Manager::getWriteConcern()` [Modify Default Write Concern](core/replica-set-write-concern/#modify-default-write-concern) in the MongoDB manual [Write Concern reference]()
