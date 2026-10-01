---
id: "en-php-function-function-mongodb-driver-monitoring-removesubscriber"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\removeSubscriber"
title: "Unregisters a monitoring event subscriber globally"
signature: "void MongoDB\\Driver\\Monitoring\\removeSubscriber(MongoDB\\Driver\\Monitoring\\Subscriber $subscriber)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/function.mongodb.driver.monitoring.removesubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Unregisters a monitoring event subscriber globally

## Description

```php
void MongoDB\Driver\Monitoring\removeSubscriber(MongoDB\Driver\Monitoring\Subscriber $subscriber)
```

Unregisters a monitoring event subscriber globally.

> If `$subscriber` is not already registered globally, this function is a no-op.

## Parameters

- **`$subscriber` (`MongoDB\Driver\Monitoring\Subscriber`)** — A monitoring event subscriber to unregister globally.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\addSubscriber()` MongoDB\Driver\Monitoring\Subscriber MongoDB\Driver\Monitoring\CommandSubscriber `MongoDB\Driver\Manager::removeSubscriber()` `mongodb.tutorial.apm`
