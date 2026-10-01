---
id: "en-php-function-mongodb-driver-readconcern-bsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ReadConcern::bsonSerialize"
title: "Returns an object for BSON serialization"
signature: "final public stdClass MongoDB\\Driver\\ReadConcern::bsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-readconcern.bsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an object for BSON serialization

## Description

```php
final public stdClass MongoDB\Driver\ReadConcern::bsonSerialize()
```

## Parameters

This function has no parameters.

## Return Values

Returns an object for serializing the ReadConcern as BSON.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\ReadConcern::bsonSerialize()` with empty read concern**

```php


<?php

$rc = new MongoDB\Driver\ReadConcern;
var_dump($rc->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($rc)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (0) {
}

{ }

   
```

**`MongoDB\Driver\ReadConcern::bsonSerialize()` with local read concern**

```php


<?php

$rc = new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::LOCAL);
var_dump($rc->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($rc)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (1) {
  ["level"]=>
  string(5) "local"
}

{ "level" : "local" }

   
```

## See Also

 `MongoDB\BSON\Serializable::bsonSerialize()` [Read Concern reference]()
