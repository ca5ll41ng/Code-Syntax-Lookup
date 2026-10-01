---
id: "en-php-function-mongodb-driver-server-getserverdescription"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getServerDescription"
title: "Returns a ServerDescription for this server"
signature: "final public MongoDB\\Driver\\ServerDescription MongoDB\\Driver\\Server::getServerDescription()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.getserverdescription.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a ServerDescription for this server

## Description

```php
final public MongoDB\Driver\ServerDescription MongoDB\Driver\Server::getServerDescription()
```

Returns a `MongoDB\Driver\ServerDescription` for this server. This is an immutable value object that will describe the server at the time this method is called.

## Parameters

This function has no parameters.

## Return Values

Returns a `MongoDB\Driver\ServerDescription` for this server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
