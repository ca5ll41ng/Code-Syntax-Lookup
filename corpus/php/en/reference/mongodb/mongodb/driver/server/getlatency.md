---
id: "en-php-function-mongodb-driver-server-getlatency"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::getLatency"
title: "Returns the latency of this server in milliseconds"
signature: "final public integer|null MongoDB\\Driver\\Server::getLatency()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.getlatency.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the latency of this server in milliseconds

## Description

```php
final public integer|null MongoDB\Driver\Server::getLatency()
```

Returns the latency of this server in milliseconds. This is the client's measured [round trip time](#round-trip-time) of a `hello` command.

## Parameters

This function has no parameters.

## Return Values

Returns the latency of this server in milliseconds, or `null` if no latency has been measured (e.g. client is connected to a load balancer).

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.11.0 | This method will return `null` if no latency has been measured. In earlier versions, an integer was always returned and an unset value might be reported as `-1`. |

## Examples

**`MongoDB\Driver\Server::getLatency()` example**

```php


<?php

$manager = new MongoDB\Driver\Manager("mongodb://localhost:27017/");
$server = $manager->selectServer();

var_dump($server->getLatency());

?>

   
```

The above example will output something similar to:

```text


int(592)

   
```

## See Also

 `MongoDB\Driver\Server::getInfo()` `MongoDB\Driver\ServerDescription::getRoundTripTime()` [Server Discovery and Monitoring Specification]()
