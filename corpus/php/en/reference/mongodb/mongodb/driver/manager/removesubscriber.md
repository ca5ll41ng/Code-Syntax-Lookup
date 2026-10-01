---
id: "en-php-function-mongodb-driver-manager-removesubscriber"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::removeSubscriber"
title: "Unregisters a monitoring event subscriber with this Manager"
signature: "final public void MongoDB\\Driver\\Manager::removeSubscriber(MongoDB\\Driver\\Monitoring\\Subscriber $subscriber)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.removesubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unregisters a monitoring event subscriber with this Manager

## Description

```php
final public void MongoDB\Driver\Manager::removeSubscriber(MongoDB\Driver\Monitoring\Subscriber $subscriber)
```

Unregisters a monitoring event subscriber with this Manager.

> If `$subscriber` is not already registered with this Manager, this function is a no-op.

## Parameters

- **`$subscriber` (`MongoDB\Driver\Monitoring\Subscriber`)** — A monitoring event subscriber to unregister with this Manager.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Manager::addSubscriber()` MongoDB\Driver\Monitoring\Subscriber MongoDB\Driver\Monitoring\CommandSubscriber `MongoDB\Driver\Monitoring\removeSubscriber()` `mongodb.tutorial.apm`
