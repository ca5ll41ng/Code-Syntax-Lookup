---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-serverheartbeatstarted"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverHeartbeatStarted"
title: "Notification method for a started server heartbeat"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverHeartbeatStarted(MongoDB\\Driver\\Monitoring\\ServerHeartbeatStartedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.serverheartbeatstarted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a started server heartbeat

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::serverHeartbeatStarted(MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent $event)
```

If the subscriber is registered, this method is called when a server heartbeat (i.e. [hello](reference/command/hello/) command issued through [server monitoring]()) is sent to the server.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent`)** — An event object encapsulating information about the started server heartbeat.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
