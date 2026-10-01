---
id: "en-php-function-mongodb-bson-binary-toarray"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::toArray"
title: "Returns the vector as an array for a Binary with subtype `MongoDB\\BSON\\Binary::SUBTYPE_VECTOR`"
signature: "final public array MongoDB\\BSON\\Binary::toArray()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.toarray.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the vector as an array for a Binary with subtype `MongoDB\BSON\Binary::SUBTYPE_VECTOR`

## Description

```php
final public array MongoDB\BSON\Binary::toArray()
```

## Parameters

This function has no parameters.

## Return Values

Returns an array containing the vector data.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\LogicException` if the subtype is not `MongoDB\BSON\Binary::SUBTYPE_VECTOR`. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\BSON\Binary::fromVector()` [BSON Types]()
