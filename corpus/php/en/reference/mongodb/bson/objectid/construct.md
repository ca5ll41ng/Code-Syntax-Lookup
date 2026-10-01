---
id: "en-php-function-mongodb-bson-objectid-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\ObjectId::__construct"
title: "Construct a new ObjectId"
signature: "final public MongoDB\\BSON\\ObjectId::__construct(string|null $id = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-objectid.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new ObjectId

## Description

```php
final public MongoDB\BSON\ObjectId::__construct(string|null $id = null)
```

## Parameters

- **`$id` (`string`)** — A 24-character hexadecimal string. If not provided, the extension will generate an ObjectId.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$id` is not a 24-character hexadecimal string. 

## Examples

**`MongoDB\BSON\ObjectId::__construct()` example**

```php


<?php

var_dump(new MongoDB\BSON\ObjectId());

var_dump(new MongoDB\BSON\ObjectId('000000000000000000000001'));

?>

   
```

The above example will output something similar to:

```text


object(MongoDB\BSON\ObjectId)#1 (1) {
  ["oid"]=>
  string(24) "56732d3dda14d81214634921"
}
object(MongoDB\BSON\ObjectId)#1 (1) {
  ["oid"]=>
  string(24) "000000000000000000000001"
}


   
```

## See Also

 [ObjectId Reference]() [BSON Types: ObjectId](#objectid)
