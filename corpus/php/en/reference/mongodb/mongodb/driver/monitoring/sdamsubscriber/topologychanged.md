---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-topologychanged"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::topologyChanged"
title: "Notification method for a topology description change"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::topologyChanged(MongoDB\\Driver\\Monitoring\\TopologyChangedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.topologychanged.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a topology description change

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::topologyChanged(MongoDB\Driver\Monitoring\TopologyChangedEvent $event)
```

If the subscriber is registered, this method is called when the topology's description changes. For example, a topology discovering a new replica set primary would cause its topology description to change.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\TopologyChangedEvent`)** — An event object encapsulating information about the changed topology description.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\TopologyChangedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
