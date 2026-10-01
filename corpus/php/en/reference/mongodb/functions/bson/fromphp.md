---
id: "en-php-function-function-mongodb-bson-fromphp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\fromPHP"
title: "Returns the BSON representation of a PHP value"
signature: "string MongoDB\\BSON\\fromPHP(array|object $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/function.mongodb.bson-fromphp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the BSON representation of a PHP value

## Description

```php
string MongoDB\BSON\fromPHP(array|object $value)
```

Serializes a PHP array or object (e.g. document) to its [BSON]() representation. The returned binary string will describe a BSON document.

## Parameters

- **`$value` (`array|object`)** — PHP value to be serialized.

## Return Values

The serialized BSON document as a binary string.

## Errors/Exceptions

  Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the PHP value cannot be converted to BSON. Possible reasons include, but are not limited to, encountering an unexpected MongoDB\BSON\Type instance or `MongoDB\BSON\Serializable::bsonSerialize()` failing to return an `array` or `stdClass`.  

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This function was removed. |

## Examples

**`MongoDB\BSON\fromPHP()` example**

```php


<?php

$bson = MongoDB\BSON\fromPHP(['foo' => 1]);
echo bin2hex($bson), "\n";

?>

   
```

The above example will output:

```text


0e00000010666f6f000100000000

   
```

## See Also

 `MongoDB\BSON\Document::fromPHP()` `MongoDB\BSON\toPHP()` [MongoDB BSON]() `mongodb.persistence`
