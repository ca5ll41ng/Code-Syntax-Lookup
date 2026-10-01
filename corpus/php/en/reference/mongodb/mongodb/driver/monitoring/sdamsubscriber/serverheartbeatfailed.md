---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-serverheartbeatfailed"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverHeartbeatFailed"
title: "Notification method for a failed server heartbeat"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverHeartbeatFailed(MongoDB\\Driver\\Monitoring\\ServerHeartbeatFailedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.serverheartbeatfailed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a failed server heartbeat

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatFailed(MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent $event)
```

If the subscriber is registered, this method is called when a server heartbeat (i.e. [hello](reference/command/hello/) command issued through [server monitoring]()) fails.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent`)** — An event object encapsulating information about the failed server heartbeat.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
