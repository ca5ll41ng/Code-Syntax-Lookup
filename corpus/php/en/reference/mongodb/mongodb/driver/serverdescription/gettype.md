---
id: "en-php-function-mongodb-driver-serverdescription-gettype"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ServerDescription::getType"
title: "Returns a string denoting the type of this server"
signature: "final public string MongoDB\\Driver\\ServerDescription::getType()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-serverdescription.gettype.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns a string denoting the type of this server

## Description

```php
final public string MongoDB\Driver\ServerDescription::getType()
```

Returns a `string` denoting the type of this server. The value will correlate with a `MongoDB\Driver\ServerDescription` constant.

## Parameters

This function has no parameters.

## Return Values

Returns a `string` denoting the type of this server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getType()`
