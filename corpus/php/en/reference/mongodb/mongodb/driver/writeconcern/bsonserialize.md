---
id: "en-php-function-mongodb-driver-writeconcern-bsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\WriteConcern::bsonSerialize"
title: "Returns an object for BSON serialization"
signature: "final public stdClass MongoDB\\Driver\\WriteConcern::bsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-writeconcern.bsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an object for BSON serialization

## Description

```php
final public stdClass MongoDB\Driver\WriteConcern::bsonSerialize()
```

## Parameters

This function has no parameters.

## Return Values

Returns an object for serializing the WriteConcern as BSON.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Examples

**`MongoDB\Driver\WriteConcern::bsonSerialize()` with majority write concern**

```php


<?php

$wc = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY);
var_dump($wc->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($wc)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (1) {
  ["w"]=>
  string(8) "majority"
}

{ "w" : "majority" }

   
```

**`MongoDB\Driver\WriteConcern::bsonSerialize()` with wtimeout and journal**

```php


<?php

$wc = new MongoDB\Driver\WriteConcern(2, 1000, true);
var_dump($wc->bsonSerialize());

echo "\n", MongoDB\BSON\Document::fromPHP($wc)->toRelaxedExtendedJSON();

?>

   
```

The above example will output something similar to:

```text


object(stdClass)#2 (3) {
  ["w"]=>
  int(2)
  ["j"]=>
  bool(true)
  ["wtimeout"]=>
  int(1000)
}

{ "w" : 2, "j" : true, "wtimeout" : 1000 }

   
```

## See Also

 `MongoDB\BSON\Serializable::bsonSerialize()` [Write Concern reference]()
