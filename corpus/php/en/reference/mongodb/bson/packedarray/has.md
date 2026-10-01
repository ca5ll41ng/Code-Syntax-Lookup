---
id: "en-php-function-mongodb-bson-packedarray-has"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::has"
title: "Returns whether a index is present in the array"
signature: "final public bool MongoDB\\BSON\\PackedArray::has(int $index)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.has.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a index is present in the array

## Description

```php
final public bool MongoDB\BSON\PackedArray::has(int $index)
```

## Parameters

- **`$index` (`int`)** — The index to look for in the array.

## Return Values

Returns `true` if the index is present in the array and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\BSON\PackedArray::get()` [BSON Types]()
