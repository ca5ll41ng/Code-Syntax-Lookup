---
id: "en-php-function-mongodb-driver-monitoring-commandfailedevent-getport"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandFailedEvent::getPort"
title: "Returns the server port for the command"
signature: "final public int MongoDB\\Driver\\Monitoring\\CommandFailedEvent::getPort()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandfailedevent.getport.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server port for the command

## Description

```php
final public int MongoDB\Driver\Monitoring\CommandFailedEvent::getPort()
```

## Parameters

This function has no parameters.

## Return Values

Returns the port of the server on which the command was executed.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
