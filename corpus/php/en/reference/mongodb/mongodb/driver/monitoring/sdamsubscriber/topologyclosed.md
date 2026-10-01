---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-topologyclosed"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::topologyClosed"
title: "Notification method for closing the topology"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::topologyClosed(MongoDB\\Driver\\Monitoring\\TopologyClosedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.topologyclosed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for closing the topology

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::topologyClosed(MongoDB\Driver\Monitoring\TopologyClosedEvent $event)
```

If the subscriber is registered, this method is called when the topology is closed.

> Due to the driver's connection handling and persistence behavior, this event can only be observed when a `MongoDB\Driver\Manager` is created with the `"disableClientPersistence"` driver option and freed before request shutdown (RSHUTDOWN).

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\TopologyClosedEvent`)** — An event object encapsulating information about the closed topology.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\TopologyClosedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
