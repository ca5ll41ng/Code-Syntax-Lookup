---
id: "en-php-function-mongodb-bson-objectid-gettimestamp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\ObjectId::getTimestamp"
title: "Returns the timestamp component of this ObjectId"
signature: "final public int MongoDB\\BSON\\ObjectId::getTimestamp()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-objectid.gettimestamp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the timestamp component of this ObjectId

## Description

```php
final public int MongoDB\BSON\ObjectId::getTimestamp()
```

The timestamp component of an ObjectId is its most significant 32 bits, which denotes the number of seconds since the Unix epoch. This value is read as an unsigned 32-bit integer with big-endian byte order.

> Because PHP's integer type is signed, some values returned by this method may appear as negative integers on 32-bit platforms. The `"&#37;u"` formatter of `sprintf()` may be used to obtain a string representation of the unsigned decimal value.

## Parameters

This function has no parameters.

## Return Values

Returns the timestamp component of this ObjectId.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\BSON\ObjectId::getTimestamp()` example**

```php


<?php

var_dump((new MongoDB\BSON\ObjectId())->getTimestamp());

var_dump((new MongoDB\BSON\ObjectId('0000002a0000000000000000'))->getTimestamp());

?>

   
```

The above example will output something similar to:

```text


integer(1484854719)
integer(42)

   
```

## See Also

 [ObjectId Reference]() [BSON Types: ObjectId](#objectid)
