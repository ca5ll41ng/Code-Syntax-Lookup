---
id: "en-php-function-mongodb-driver-serverdescription-getlastupdatetime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ServerDescription::getLastUpdateTime"
title: "Returns the server's last update time in microseconds"
signature: "final public int MongoDB\\Driver\\ServerDescription::getLastUpdateTime()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-serverdescription.getlastupdatetime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server's last update time in microseconds

## Description

```php
final public int MongoDB\Driver\ServerDescription::getLastUpdateTime()
```

Returns the server's last update time in microseconds.

> The returned value is a monotonic timestamp, which starts at an arbitrary point. As such, it is only suitable to compare with other return values from `MongoDB\Driver\ServerDescription::getLastUpdateTime()`.

## Parameters

This function has no parameters.

## Return Values

Returns the server's last update time in microseconds.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
