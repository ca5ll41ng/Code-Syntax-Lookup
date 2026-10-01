---
id: "en-php-function-mongodb-driver-readpreference-getmode"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadPreference::getMode"
title: "Returns the ReadPreference's \"mode\" option"
signature: "final public int MongoDB\\Driver\\ReadPreference::getMode()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readpreference.getmode.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the ReadPreference's "mode" option

## Description

```php
final public int MongoDB\Driver\ReadPreference::getMode()
```

## Parameters

This function has no parameters.

## Return Values

Returns the ReadPreference's "mode" option.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This method was removed. |

## Examples

**`MongoDB\Driver\ReadPreference::getMode()` example**

```php


<?php

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY);
var_dump($rp->getMode());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::PRIMARY_PREFERRED);
var_dump($rp->getMode());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY);
var_dump($rp->getMode());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED);
var_dump($rp->getMode());

$rp = new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::NEAREST);
var_dump($rp->getMode());

?>

   
```

The above example will output:

```text


int(1)
int(5)
int(2)
int(6)
int(10)

   
```

## See Also

 `MongoDB\Driver\ReadPreference::getModeString()` [Read Preference reference]()
