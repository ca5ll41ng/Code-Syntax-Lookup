---
id: "en-php-function-mongodb-driver-serverdescription-getroundtriptime"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ServerDescription::getRoundTripTime"
title: "Returns the server's round trip time in milliseconds"
signature: "final public int|null MongoDB\\Driver\\ServerDescription::getRoundTripTime()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-serverdescription.getroundtriptime.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server's round trip time in milliseconds

## Description

```php
final public int|null MongoDB\Driver\ServerDescription::getRoundTripTime()
```

Returns the server's round trip time in milliseconds. This is the client's measurement of the duration of a [hello](reference/command/hello/) command.

## Parameters

This function has no parameters.

## Return Values

Returns the server's round trip time in milliseconds.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getLatency()`
