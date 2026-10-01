---
id: "en-php-function-mongodb-driver-monitoring-commandstartedevent-getserverconnectionid"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandStartedEvent::getServerConnectionId"
title: "Returns the server connection ID for the command"
signature: "final public int|null MongoDB\\Driver\\Monitoring\\CommandStartedEvent::getServerConnectionId()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandstartedevent.getserverconnectionid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server connection ID for the command

## Description

```php
final public int|null MongoDB\Driver\Monitoring\CommandStartedEvent::getServerConnectionId()
```

Returns the server connection ID for the command. The server connection ID is distinct from server (i.e. `MongoDB\Driver\Monitoring\CommandStartedEvent::getServer()`) and is returned in the "connectionId" field of a `hello` command response MongoDB 4.2+.

## Parameters

This function has no parameters.

## Return Values

Returns the server connection ID, or `null` if it is not available.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
