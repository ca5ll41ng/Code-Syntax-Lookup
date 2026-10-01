---
id: "en-php-function-mongodb-bson-packedarray-fromjson"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::fromJSON"
title: "Construct a new BSON array instance from a JSON string"
signature: "final static public MongoDB\\BSON\\PackedArray MongoDB\\BSON\\PackedArray::fromJSON(string $json)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.fromjson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new BSON array instance from a JSON string

## Description

```php
final static public MongoDB\BSON\PackedArray MongoDB\BSON\PackedArray::fromJSON(string $json)
```

Converts an [extended JSON]() string to its BSON representation.

## Parameters

- **`$json` (`string`)** — JSON value to be converted.

## Return Values

Returns a new `MongoDB\BSON\PackedArray` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.  Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the JSON value cannot be converted to a BSON array (e.g. due to a syntax error).  

## Examples

**`MongoDB\BSON\PackedArray::fromJSON()` example**

```php

    
<?php

$json = '[ "foo", { "$numberInt" : "123" }, { "$numberLong" : "4294967295" }, { "$oid" : "56315a7c6118fd1b920270b1" } ]';
$packedArray = MongoDB\BSON\PackedArray::fromJSON($json);
var_dump($packedArray);

?>

   
```

The above example will output:

```text

    
object(MongoDB\BSON\PackedArray)#1 (2) {
  ["data"]=>
  string(68) "MQAAAAIwAAQAAABmb28AEDEAewAAABIyAP////8AAAAABzMAVjFafGEY/RuSAnCxAA=="
  ["value"]=>
  array(4) {
    [0]=>
    string(3) "foo"
    [1]=>
    int(123)
    [2]=>
    int(4294967295)
    [3]=>
    object(MongoDB\BSON\ObjectId)#2 (1) {
      ["oid"]=>
      string(24) "56315a7c6118fd1b920270b1"
    }
  }
}

   
```

## See Also

 `MongoDB\BSON\PackedArray::fromPHP()` [MongoDB Extended JSON]() [BSON Types]()
