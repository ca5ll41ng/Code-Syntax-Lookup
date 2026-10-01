---
id: "en-php-function-mongodb-bson-packedarray-get"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::get"
title: "Returns the value of an index in the array"
signature: "final public mixed MongoDB\\BSON\\PackedArray::get(int $key)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the value of an index in the array

## Description

```php
final public mixed MongoDB\BSON\PackedArray::get(int $key)
```

## Parameters

- **`$key` (`int`)** — The index to retrieve from the array.

## Return Values

Returns the value associated with the given index. If the index is not present in the array, an exception is thrown.

> When encountering a value encoded as 64-bit integer in the BSON array, the return value of this method will be a `MongoDB\BSON\Int64` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\RuntimeException` if the index is not present in the array. 

## See Also

 `MongoDB\BSON\PackedArray::has()` [BSON Types]()
