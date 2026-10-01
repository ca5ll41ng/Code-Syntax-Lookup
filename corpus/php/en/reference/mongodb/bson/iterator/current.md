---
id: "en-php-function-mongodb-bson-iterator-current"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Iterator::current"
title: "Returns the current element"
signature: "public mixed MongoDB\\BSON\\Iterator::current()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-iterator.current.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the current element

## Description

```php
public mixed MongoDB\BSON\Iterator::current()
```

## Parameters

This function has no parameters.

## Return Values

Returns the value of the current element.

> When encountering a value encoded as 64-bit integer in the BSON structure, the return value of this method will be a `MongoDB\BSON\Int64` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the iterator is not valid. 

## See Also

 `Iterator::current()`
