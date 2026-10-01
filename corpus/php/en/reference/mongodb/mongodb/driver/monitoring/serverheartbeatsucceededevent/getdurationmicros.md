---
id: "en-php-function-mongodb-driver-monitoring-serverheartbeatsucceededevent-getdurationmicros"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\ServerHeartbeatSucceededEvent::getDurationMicros"
title: "Returns the heartbeat's duration in microseconds"
signature: "final public int MongoDB\\Driver\\Monitoring\\ServerHeartbeatSucceededEvent::getDurationMicros()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-serverheartbeatsucceededevent.getdurationmicros.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the heartbeat's duration in microseconds

## Description

```php
final public int MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent::getDurationMicros()
```

The heartbeat's duration is a calculated value that includes the time to send the message and receive the reply from the server.

## Parameters

This function has no parameters.

## Return Values

Returns the heartbeat's duration in microseconds.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
