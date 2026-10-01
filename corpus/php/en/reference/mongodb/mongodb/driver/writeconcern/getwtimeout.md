---
id: "en-php-function-mongodb-driver-writeconcern-getwtimeout"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcern::getWtimeout"
title: "Returns the WriteConcern's \"wtimeout\" option"
signature: "final public int MongoDB\\Driver\\WriteConcern::getWtimeout()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcern.getwtimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteConcern's "wtimeout" option

## Description

```php
final public int MongoDB\Driver\WriteConcern::getWtimeout()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteConcern's "wtimeout" option.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.7.0 | On 32-bit systems, this method will always truncate the `wTimeout` value if it exceeds the 32-bit range. In that case, a warning will be emitted. |

## Examples

**`MongoDB\Driver\WriteConcern::getWtimeout()` example**

```php


<?php

$wc = new MongoDB\Driver\WriteConcern(1);
var_dump($wc->getWtimeout());

$wc = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 3000);
var_dump($wc->getWtimeout());

?>

   
```

The above example will output:

```text


int(0)
int(3000)

   
```

## See Also

 [Write Concern reference]()
