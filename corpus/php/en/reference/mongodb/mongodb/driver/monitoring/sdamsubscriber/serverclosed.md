---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-serverclosed"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverClosed"
title: "Notification method for closing a server"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverClosed(MongoDB\\Driver\\Monitoring\\ServerClosedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.serverclosed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for closing a server

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::serverClosed(MongoDB\Driver\Monitoring\ServerClosedEvent $event)
```

If the subscriber is registered, this method is called when an existing server is removed from the topology.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\ServerClosedEvent`)** — An event object encapsulating information about the closed server.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\ServerClosedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
