---
id: "en-php-function-mongodb-bson-packedarray-offsetexists"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::offsetExists"
title: "Returns whether a index is present in the array"
signature: "final public bool MongoDB\\BSON\\PackedArray::offsetExists(mixed $key)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.offsetexists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether a index is present in the array

## Description

```php
final public bool MongoDB\BSON\PackedArray::offsetExists(mixed $key)
```

## Parameters

- **`$key`** — The index to look for in the array.

## Return Values

Returns `true` if the index is present in the array and `false` otherwise.

## See Also

`ArrayAccess::offsetExists()` `MongoDB\BSON\PackedArray::has()`
