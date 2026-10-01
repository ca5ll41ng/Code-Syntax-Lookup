---
id: "en-php-function-function-mongodb-bson-fromjson"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\fromJSON"
title: "Returns the BSON representation of a JSON value"
signature: "string MongoDB\\BSON\\fromJSON(string $json)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/function.mongodb.bson-fromjson.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the BSON representation of a JSON value

## Description

```php
string MongoDB\BSON\fromJSON(string $json)
```

Converts an [extended JSON]() string to its BSON representation.

## Parameters

- **`$json` (`string`)** — JSON value to be converted.

## Return Values

The serialized BSON document as a binary string.

## Errors/Exceptions

  Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the JSON value cannot be converted to BSON (e.g. due to a syntax error).  

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This function was removed. |

## Examples

**`MongoDB\BSON\fromJSON()` example**

```php


<?php

$json = '{ "_id": { "$oid": "563143b280d2387c91807965" } }';
$bson = MongoDB\BSON\fromJSON($json);
$value = MongoDB\BSON\toPHP($bson);
var_dump($value);

?>

   
```

The above example will output:

```text


object(stdClass)#2 (1) {
  ["_id"]=>
  object(MongoDB\BSON\ObjectId)#1 (1) {
    ["oid"]=>
    string(24) "563143b280d2387c91807965"
  }
}

   
```

## See Also

 `MongoDB\BSON\Document::fromJSON()` `MongoDB\BSON\toJSON()` [MongoDB Extended JSON]() [MongoDB BSON]()
