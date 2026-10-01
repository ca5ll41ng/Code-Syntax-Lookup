---
id: "en-php-function-mongodb-driver-server-gettags"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getTags"
title: "Returns an array of tags describing this server in a replica set"
signature: "final public array MongoDB\\Driver\\Server::getTags()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.gettags.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an array of tags describing this server in a replica set

## Description

```php
final public array MongoDB\Driver\Server::getTags()
```

Returns an `array` of [tags](#term-tag) used to describe this server in a replica set. The array will contain zero or more `string` key and value pairs.

## Parameters

This function has no parameters.

## Return Values

Returns an `array` of tags used to describe this server in a replica set.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getInfo()`
