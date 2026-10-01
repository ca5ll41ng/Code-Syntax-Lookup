---
id: "en-php-function-mongodb-bson-packedarray-getiterator"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::getIterator"
title: "Returns an iterator for the BSON array"
signature: "final public MongoDB\\BSON\\Iterator MongoDB\\BSON\\PackedArray::getIterator()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.getiterator.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an iterator for the BSON array

## Description

```php
final public MongoDB\BSON\Iterator MongoDB\BSON\PackedArray::getIterator()
```

## Parameters

This function has no parameters.

## Return Values

Returns a `MongoDB\BSON\Iterator` instance that can be used to iterate over all indexes in the array.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\UnexpectedValueException` if the BSON iterator could not be initialized. 

## See Also

 [BSON Types]()
