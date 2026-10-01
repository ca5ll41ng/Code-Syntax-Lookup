---
id: "en-php-function-mongodb-driver-server-gettype"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getType"
title: "Returns an integer denoting the type of this server"
signature: "final public int MongoDB\\Driver\\Server::getType()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns an integer denoting the type of this server

## Description

```php
final public int MongoDB\Driver\Server::getType()
```

Returns an `int` denoting the type of this server. The value will correlate with a `MongoDB\Driver\Server` constant.

## Parameters

This function has no parameters.

## Return Values

Returns an `int` denoting the type of this server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getInfo()` `MongoDB\Driver\ServerDescription::getType()`
