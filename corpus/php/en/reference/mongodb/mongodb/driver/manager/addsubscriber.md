---
id: "en-php-function-mongodb-driver-manager-addsubscriber"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::addSubscriber"
title: "Registers a monitoring event subscriber with this Manager"
signature: "final public void MongoDB\\Driver\\Manager::addSubscriber(MongoDB\\Driver\\Monitoring\\Subscriber $subscriber)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.addsubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a monitoring event subscriber with this Manager

## Description

```php
final public void MongoDB\Driver\Manager::addSubscriber(MongoDB\Driver\Monitoring\Subscriber $subscriber)
```

Registers a monitoring event subscriber with this Manager. The subscriber will be notified of all events for this Manager.

> If `$subscriber` is already registered with this Manager, this function is a no-op. If `$subscriber` is also registered globally, it will still only be notified once of each event for this Manager.

## Parameters

- **`$subscriber` (`MongoDB\Driver\Monitoring\Subscriber`)** — A monitoring event subscriber to register with this Manager.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.  Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$subscriber` is a `MongoDB\Driver\Monitoring\LogSubscriber`, since loggers can only be registered globally.  

## See Also

 `MongoDB\Driver\Manager::removeSubscriber()` MongoDB\Driver\Monitoring\Subscriber MongoDB\Driver\Monitoring\CommandSubscriber `MongoDB\Driver\Monitoring\addSubscriber()` `mongodb.tutorial.apm`
