---
id: "en-php-function-mongodb-bson-packedarray-fromphp"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\PackedArray::fromPHP"
title: "Construct a new BSON array instance from PHP data"
signature: "final static public MongoDB\\BSON\\PackedArray MongoDB\\BSON\\PackedArray::fromPHP(array $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-packedarray.fromphp.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new BSON array instance from PHP data

## Description

```php
final static public MongoDB\BSON\PackedArray MongoDB\BSON\PackedArray::fromPHP(array $value)
```

## Parameters

- **`$value` (`array`)** — The PHP array to convert to a BSON array. The array must be a list (i.e. have sequential numeric keys starting with `0`).

## Return Values

Returns a new `MongoDB\BSON\PackedArray` instance.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the given array is not a list (i.e. has sequential numeric keys starting with `0`). 

## See Also

 [BSON Types]()
