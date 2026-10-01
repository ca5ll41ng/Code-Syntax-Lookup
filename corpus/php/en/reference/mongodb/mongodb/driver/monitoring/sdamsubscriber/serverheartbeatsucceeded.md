---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-serverheartbeatsucceeded"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverHeartbeatSucceeded"
title: "Notification method for a successful server heartbeat"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverHeartbeatSucceeded(MongoDB\\Driver\\Monitoring\\ServerHeartbeatSucceededEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.serverheartbeatsucceeded.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a successful server heartbeat

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatSucceeded(MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent $event)
```

If the subscriber is registered, this method is called when a server heartbeat (i.e. [hello](reference/command/hello/) command issued through [server monitoring]()) succeeds.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent`)** — An event object encapsulating information about the successful server heartbeat.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
