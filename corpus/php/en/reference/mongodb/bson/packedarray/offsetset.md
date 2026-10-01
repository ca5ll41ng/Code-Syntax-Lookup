---
id: "en-php-function-mongodb-bson-packedarray-offsetset"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::offsetSet"
title: "Implementation of `ArrayAccess`"
signature: "final public void MongoDB\\BSON\\PackedArray::offsetSet(mixed $key, mixed $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.offsetset.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Implementation of `ArrayAccess`

## Description

```php
final public void MongoDB\BSON\PackedArray::offsetSet(mixed $key, mixed $value)
```

Sets the value at the specified `$key` to `$value`.

## Parameters

- **`$key`** — The index being set.
- **`$value`** — The new value for the `$key`.

## Return Values

No value is returned.

## Errors/Exceptions

 Always throws a `MongoDB\Driver\Exception\LogicException`.
