---
id: "en-php-function-mongodb-bson-iterator-key"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Iterator::key"
title: "Returns the key of the current element"
signature: "public string|int MongoDB\\BSON\\Iterator::key()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-iterator.key.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the key of the current element

## Description

```php
public string|int MongoDB\BSON\Iterator::key()
```

## Parameters

This function has no parameters.

## Return Values

Returns the key of the current element. When iterating a BSON document, the key will always be a `string`. When iterating a BSON array, the key will be an `int`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\LogicException` if the iterator is not valid. 

## See Also

 `Iterator::key()`
