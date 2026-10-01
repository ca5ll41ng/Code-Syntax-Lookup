---
id: "en-php-function-mongodb-driver-server-issecondary"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::isSecondary"
title: "Checks if this server is a secondary member of a replica set"
signature: "final public bool MongoDB\\Driver\\Server::isSecondary()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.issecondary.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if this server is a secondary member of a replica set

## Description

```php
final public bool MongoDB\Driver\Server::isSecondary()
```

Returns whether this server is a [secondary member](#term-secondary) of a replica set.

## Parameters

This function has no parameters.

## Return Values

Returns `true` if this server is a secondary member of a replica set, and `false` otherwise.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getInfo()`
