---
id: "en-php-function-mongodb-driver-monitoring-serverheartbeatsucceededevent-isawaited"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\ServerHeartbeatSucceededEvent::isAwaited"
title: "Returns whether the heartbeat used a streaming protocol"
signature: "final public bool MongoDB\\Driver\\Monitoring\\ServerHeartbeatSucceededEvent::isAwaited()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-serverheartbeatsucceededevent.isawaited.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns whether the heartbeat used a streaming protocol

## Description

```php
final public bool MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::isAwaited()
```

Returns whether the heartbeat used a streaming protocol. The extension does not use the streaming protocol for monitoring, so this method will always return `false`.

## Parameters

This function has no parameters.

## Return Values

Returns `false`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
