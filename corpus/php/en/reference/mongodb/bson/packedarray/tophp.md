---
id: "en-php-function-mongodb-bson-packedarray-tophp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::toPHP"
title: "Returns the PHP representation of the BSON array"
signature: "final public array|object MongoDB\\BSON\\PackedArray::toPHP(array|null $typeMap = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.tophp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the PHP representation of the BSON array

## Description

```php
final public array|object MongoDB\BSON\PackedArray::toPHP(array|null $typeMap = null)
```

## Parameters

- **`$typeMap` (`array`)** — Type map configuration.

## Return Values

The decoded PHP value.

> When encountering a value encoded as 64-bit integer in the BSON array, the return value of this method will be a `MongoDB\BSON\Int64` instance.

## Errors/Exceptions

  Throws `MongoDB\Driver\Exception\InvalidArgumentException` if a class in the type map cannot be instantiated or does not implement MongoDB\BSON\Unserializable.  

## See Also

 `MongoDB\BSON\toPHP()` [BSON Types]()
