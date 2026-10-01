---
id: "en-php-function-mongodb-driver-serverdescription-gethelloresponse"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\ServerDescription::getHelloResponse"
title: "Returns the server's most recent \"hello\" response"
signature: "final public array MongoDB\\Driver\\ServerDescription::getHelloResponse()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-serverdescription.gethelloresponse.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server's most recent "hello" response

## Description

```php
final public array MongoDB\Driver\ServerDescription::getHelloResponse()
```

Returns an array of information describing the server. This array is derived from the most recent (at the time the `MongoDB\Driver\ServerDescription` was constructed) [hello](reference/command/hello/) command response obtained through [server monitoring]().

> When the driver is connected to a load balancer, this method will return an empty array since load balancers are not monitored. This is in contrast to `MongoDB\Driver\Server::getInfo()`, which would return the backing server's [hello](reference/command/hello/) command response from the initial connection handshake.

## Parameters

This function has no parameters.

## Return Values

Returns an array of information describing this server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Server::getInfo()` [hello](reference/command/hello/) command in the MongoDB manual [Server Discovery and Monitoring Specification]()
