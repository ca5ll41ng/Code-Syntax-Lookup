---
id: "en-php-function-function-mongodb-bson-tophp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\toPHP"
title: "Returns the PHP representation of a BSON value"
signature: "array|object MongoDB\\BSON\\toPHP(string $bson, array $typeMap = array())"
module: "mongodb"
source_url: "https://www.php.net/manual/en/function.mongodb.bson-tophp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the PHP representation of a BSON value

## Description

```php
array|object MongoDB\BSON\toPHP(string $bson, array $typeMap = array())
```

Unserializes a BSON document (i.e. binary string) to its PHP representation. The `$typeMap` parameter may be used to control the PHP types used for converting BSON arrays and documents (both root and embedded).

> BSON documents can technically contain duplicate keys because documents are stored as a list of key-value pairs; however, applications should refrain from generating documents with duplicate keys as server and driver behavior may be undefined. Since PHP objects and arrays cannot have duplicate keys, data could also be lost when decoding a BSON document with duplicate keys.

## Parameters

- **`$bson` (`string`)** — BSON value to be unserialized.
- **`$typeMap` (`array`)** — Type map configuration.

## Return Values

The unserialized PHP value.

## Errors/Exceptions

  Throws `MongoDB\Driver\Exception\InvalidArgumentException` if a class in the type map cannot be instantiated or does not implement MongoDB\BSON\Unserializable.  Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the input did not contain exactly one BSON document. Possible reasons include, but are not limited to, invalid BSON, extra data (after reading one BSON document), or an unexpected [libbson]() error. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This function was removed. |
| PECL mongodb 1.4.0 | If the input contains an unsupported, deprecated BSON type, the extension will now no longer log a warning to the debug log, but instead will create an object representing this type. |
| PECL mongodb 1.3.2 | `MongoDB\Driver\Exception\UnexpectedValueException` is no longer thrown if the input contains an unsupported, deprecated BSON type. Such types will be ignored (as they were in versions before 1.3.0), although the extension will now log a warning to the debug log (see: mongodb.debug). |
| PECL mongodb 1.3.0 | `MongoDB\Driver\Exception\UnexpectedValueException` is thrown if the input contains an unsupported, deprecated BSON type. Previously, such types were ignored. |

## Examples

**`MongoDB\BSON\toPHP()` example**

```php


<?php

$bson = hex2bin('0e00000010666f6f000100000000');
$value = MongoDB\BSON\toPHP($bson);
var_dump($value);

?>

   
```

The above example will output:

```text


object(stdClass)#1 (1) {
  ["foo"]=>
  int(1)
}

   
```

## See Also

 `MongoDB\BSON\Document::toPHP()` `MongoDB\BSON\fromPHP()` [MongoDB BSON]() `mongodb.persistence`
