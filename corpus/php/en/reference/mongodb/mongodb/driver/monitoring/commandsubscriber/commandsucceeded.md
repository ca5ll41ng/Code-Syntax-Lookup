---
id: "en-php-function-mongodb-driver-monitoring-commandsubscriber-commandsucceeded"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandSubscriber::commandSucceeded"
title: "Notification method for a successful command"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\CommandSubscriber::commandSucceeded(MongoDB\\Driver\\Monitoring\\CommandSucceededEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandsubscriber.commandsucceeded.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a successful command

## Description

```php
abstract public void MongoDB\Driver\Monitoring\CommandSubscriber::commandSucceeded(MongoDB\Driver\Monitoring\CommandSucceededEvent $event)
```

If the subscriber is registered, this method is called when a command succeeds.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\CommandSucceededEvent`)** — An event object encapsulating information about the successful command.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\CommandSucceededEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()` `mongodb.tutorial.apm`
