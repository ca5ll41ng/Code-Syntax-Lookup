---
id: "en-php-function-mongodb-bson-binary-fromvector"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Binary::fromVector"
title: "Creates a new binary with subtype `MongoDB\\BSON\\Binary::SUBTYPE_VECTOR` from the given array and vector type"
signature: "final public static MongoDB\\BSON\\Binary MongoDB\\BSON\\Binary::fromVector(array $vector, MongoDB\\BSON\\VectorType $vectorType)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-binary.fromvector.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Creates a new binary with subtype `MongoDB\BSON\Binary::SUBTYPE_VECTOR` from the given array and vector type

## Description

```php
final public static MongoDB\BSON\Binary MongoDB\BSON\Binary::fromVector(array $vector, MongoDB\BSON\VectorType $vectorType)
```

## Parameters

- **`$vector` (`array`)** — An array of values representing the vector data. The type of each value must match the type indicated by the `$vectorType` parameter: - for `MongoDB\BSON\VectorType::Float32`, each value must be a `float` - for `MongoDB\BSON\VectorType::Int8`, each value must be an 8-bit `int`, i.e. from `-127` to `128` - for `MongoDB\BSON\VectorType::PackedBit`, each value must be a `bool` or 1-bit `int`, i.e. `0` or `1`
- **`$vectorType` (`MongoDB\BSON\VectorType`)** — The vector data type.

## Return Values

Returns a new Binary with subtype `MongoDB\BSON\Binary::SUBTYPE_VECTOR`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\BSON\Binary::toArray()` `MongoDB\BSON\Binary::getVectorType()` `MongoDB\BSON\VectorType` [BSON Types]()
