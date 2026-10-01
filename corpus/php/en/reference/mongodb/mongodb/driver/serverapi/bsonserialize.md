---
id: "en-php-function-mongodb-driver-serverapi-bsonserialize"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ServerApi::bsonSerialize"
title: "Returns an object for BSON serialization"
signature: "final public stdClass MongoDB\\Driver\\ServerApi::bsonSerialize()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-serverapi.bsonserialize.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an object for BSON serialization

## Description

```php
final public stdClass MongoDB\Driver\ServerApi::bsonSerialize()
```

## Parameters

This function has no parameters.

## Return Values

Returns an object for serializing the ServerApi as BSON.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\BSON\Serializable::bsonSerialize()`
