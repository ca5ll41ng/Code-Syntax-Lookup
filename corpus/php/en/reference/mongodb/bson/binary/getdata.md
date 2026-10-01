---
id: "en-php-function-mongodb-bson-binary-getdata"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::getData"
title: "Returns the Binary's data"
signature: "final public string MongoDB\\BSON\\Binary::getData()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.getdata.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Binary's data

## Description

```php
final public string MongoDB\BSON\Binary::getData()
```

## Parameters

This function has no parameters.

## Return Values

Returns the Binary's data.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\Binary::getData()` example**

```php


<?php

$binary = new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC);
var_dump($binary->getData());

?>

   
```

The above example will output:

```text


string(3) "foo"

   
```

## See Also

 [BSON Types]()
