---
id: "en-php-function-mongodb-driver-server-isarbiter"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::isArbiter"
title: "Checks if this server is an arbiter member of a replica set"
signature: "final public bool MongoDB\\Driver\\Server::isArbiter()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.isarbiter.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if this server is an arbiter member of a replica set

## Description

```php
final public bool MongoDB\Driver\Server::isArbiter()
```

Returns whether this server is an [arbiter member](#term-arbiter) of a replica set.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if this server is an arbiter member of a replica set, and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getInfo()`
