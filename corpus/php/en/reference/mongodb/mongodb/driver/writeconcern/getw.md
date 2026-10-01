---
id: "en-php-function-mongodb-driver-writeconcern-getw"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcern::getW"
title: "Returns the WriteConcern's \"w\" option"
signature: "final public string|int|null MongoDB\\Driver\\WriteConcern::getW()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcern.getw.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the WriteConcern's "w" option

## Description

```php
final public string|int|null MongoDB\Driver\WriteConcern::getW()
```

## Parameters

This function has no parameters.

## Return Values

Returns the WriteConcern's "w" option.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcern::getW()` example**

```php


<?php

$wc = new MongoDB\Driver\WriteConcern(1);
var_dump($wc->getW());

$wc = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY);
var_dump($wc->getW());

?>

   
```

The above example will output:

```text


int(1)
string(8) "majority"

   
```

## See Also

 [Write Concern reference]()
