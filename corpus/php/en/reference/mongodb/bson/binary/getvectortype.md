---
id: "en-php-function-mongodb-bson-binary-getvectortype"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::getVectorType"
title: "Returns the data type for a Binary with the vector subtype"
signature: "final public MongoDB\\BSON\\VectorType MongoDB\\BSON\\Binary::getVectorType()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.getvectortype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the data type for a Binary with the vector subtype

## Description

```php
final public MongoDB\BSON\VectorType MongoDB\BSON\Binary::getVectorType()
```

## Parameters

This function has no parameters.

## Return Values

Returns the data type of the Binary vector.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\LogicException` if the subtype is not `MongoDB\BSON\Binary::SUBTYPE_VECTOR`. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 [BSON Types]() `MongoDB\BSON\VectorType`
