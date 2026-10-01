---
id: "en-php-function-mongodb-driver-monitoring-commandsubscriber-commandfailed"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandSubscriber::commandFailed"
title: "Notification method for a failed command"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\CommandSubscriber::commandFailed(MongoDB\\Driver\\Monitoring\\CommandFailedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandsubscriber.commandfailed.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a failed command

## Description

```php
abstract public void MongoDB\Driver\Monitoring\CommandSubscriber::commandFailed(MongoDB\Driver\Monitoring\CommandFailedEvent $event)
```

If the subscriber is registered, this method is called when a command fails.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\CommandFailedEvent`)** — An event object encapsulating information about the failed command.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\CommandFailedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()` `mongodb.tutorial.apm`
