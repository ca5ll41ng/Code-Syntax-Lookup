---
id: "en-php-function-mongodb-driver-monitoring-commandsucceededevent-gethost"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandSucceededEvent::getHost"
title: "Returns the server hostname for the command"
signature: "final public string MongoDB\\Driver\\Monitoring\\CommandSucceededEvent::getHost()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandsucceededevent.gethost.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server hostname for the command

## Description

```php
final public string MongoDB\Driver\Monitoring\CommandSucceededEvent::getHost()
```

## Parameters

This function has no parameters.

## Return Values

Returns the hostname of the server on which the command was executed.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
