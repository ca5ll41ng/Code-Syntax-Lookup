---
id: "en-php-function-mongodb-driver-monitoring-commandstartedevent-getserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandStartedEvent::getServer"
title: "Returns the Server on which the command was executed"
signature: "final public MongoDB\\Driver\\Server MongoDB\\Driver\\Monitoring\\CommandStartedEvent::getServer()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandstartedevent.getserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the Server on which the command was executed

## Description

```php
final public MongoDB\Driver\Server MongoDB\Driver\Monitoring\CommandStartedEvent::getServer()
```

Returns the `MongoDB\Driver\Server` on which the command was executed.

## Parameters

This function has no parameters.

## Return Values

Returns the `MongoDB\Driver\Server` on which the command was executed.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | This method was removed. |

## See Also

 `MongoDB\Driver\Monitoring\CommandFailedEvent::getServer()` `MongoDB\Driver\Monitoring\CommandSucceededEvent::getServer()` `mongodb.tutorial.apm`
