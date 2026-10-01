---
id: "en-php-function-mongodb-driver-monitoring-sdamsubscriber-serverchanged"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverChanged"
title: "Notification method for a server description change"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\SDAMSubscriber::serverChanged(MongoDB\\Driver\\Monitoring\\ServerChangedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-sdamsubscriber.serverchanged.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a server description change

## Description

```php
abstract public void MongoDB\Driver\Monitoring\SDAMSubscriber::serverChanged(MongoDB\Driver\Monitoring\ServerChangedEvent $event)
```

If the subscriber is registered, this method is called when a server's description changes. For example, a server's type changing from secondary to primary would cause its server description to change.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\ServerChangedEvent`)** — An event object encapsulating information about the changed server description.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\ServerChangedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()`
