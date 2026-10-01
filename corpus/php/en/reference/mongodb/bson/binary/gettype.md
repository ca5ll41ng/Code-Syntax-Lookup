---
id: "en-php-function-mongodb-bson-binary-gettype"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::getType"
title: "Returns the Binary's type"
signature: "final public int MongoDB\\BSON\\Binary::getType()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Binary's type

## Description

```php
final public int MongoDB\BSON\Binary::getType()
```

## Parameters

This function has no parameters.

## Return Values

Returns the Binary's type.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Binary::getType()` example**

```php


<?php

$binary = new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC);
var_dump($binary->getType());

?>

   
```

The above example will output:

```text


int(0)

   
```

## See Also

 [BSON Types]()
