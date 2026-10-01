---
id: "en-php-function-mongodb-bson-int64-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\BSON\\Int64::__construct"
title: "Construct a new Int64"
signature: "final public MongoDB\\BSON\\Int64::__construct(int|string $value)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-bson-int64.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Construct a new Int64

## Description

```php
final public MongoDB\BSON\Int64::__construct(int|string $value)
```

Creates a new `MongoDB\BSON\Int64` instance for the given integer value.

## Parameters

- **`$value` (`int|string`)** — The value to assign to the `Int64` instance. This value can be provided as an `int` or `string`, the latter being required on 32-bit platforms to represent 64-bit values.

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.16.0 | This method was made public to support creating Int64 instances when working with raw BSON. |

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if string `$value` cannot be parsed as a 64-bit integer. 

## See Also

 [BSON Types]()
