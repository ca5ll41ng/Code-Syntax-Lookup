---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-topologyopening"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::topologyOpening"
title: "Notification method for opening the topology"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::topologyOpening(MongoDB\\Driver\\Monitoring\\TopologyOpeningEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.topologyopening.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for opening the topology

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::topologyOpening(MongoDB\Driver\Monitoring\TopologyOpeningEvent $event)
```

If the subscriber is registered, this method is called when the topology is opened.

> Due to the driver's connection handling and persistence behavior, this event may not be observed if a `MongoDB\Driver\Manager` uses a previously persisted [libmongoc]() client.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\TopologyOpeningEvent`)** — An event object encapsulating information about the opened topology.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\TopologyOpeningEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
