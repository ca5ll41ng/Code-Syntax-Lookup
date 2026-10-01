---
id: "en-php-function-mongodb-driver-monitoring-commandsubscriber-commandstarted"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\CommandSubscriber::commandStarted"
title: "Notification method for a started command"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\CommandSubscriber::commandStarted(MongoDB\\Driver\\Monitoring\\CommandStartedEvent $event)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-commandsubscriber.commandstarted.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a started command

## Description

```php
abstract public void MongoDB\Driver\Monitoring\CommandSubscriber::commandStarted(MongoDB\Driver\Monitoring\CommandStartedEvent $event)
```

If the subscriber is registered, this method is called when a command is sent to the server.

## Parameters

- **`$event` (`MongoDB\Driver\Monitoring\CommandStartedEvent`)** — An event object encapsulating information about the started command.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\CommandStartedEvent` `MongoDB\Driver\Monitoring\addSubscriber()` `MongoDB\Driver\Manager::addSubscriber()` `mongodb.tutorial.apm`
