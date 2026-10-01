---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-serveropening"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverOpening"
title: "Notification method for opening a server"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverOpening(MongoDB\\Driver\\Monitoring\\ServerOpeningEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.serveropening.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for opening a server

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::serverOpening(MongoDB\Driver\Monitoring\ServerOpeningEvent $event)
```

If the subscriber is registered, this method is called when a new server is added to the topology.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\ServerOpeningEvent`)** — An event object encapsulating information about the opened server.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\ServerOpeningEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
