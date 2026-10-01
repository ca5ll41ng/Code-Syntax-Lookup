---
id: "en-php-function-function-mongodb-driver-monitoring-addsubscriber"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\addSubscriber"
title: "Registers a monitoring event subscriber globally"
signature: "void MongoDB\\Driver\\Monitoring\\addSubscriber(MongoDB\\Driver\\Monitoring\\Subscriber $subscriber)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/function.mongodb.driver.monitoring.addsubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Registers a monitoring event subscriber globally

## Description

```php
void MongoDB\Driver\Monitoring\addSubscriber(MongoDB\Driver\Monitoring\Subscriber $subscriber)
```

Registers a monitoring event subscriber globally. The subscriber will be notified of all events in the extension for any Manager.

> If `$subscriber` is already registered globally, this function is a no-op. If `$subscriber` is also registered with one or more Managers, it will still only be notified once of each event for each Manager.

## Parameters

- **`$subscriber` (`MongoDB\Driver\Monitoring\Subscriber`)** — A monitoring event subscriber to register globally.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\removeSubscriber()` MongoDB\Driver\Monitoring\Subscriber MongoDB\Driver\Monitoring\CommandSubscriber `MongoDB\Driver\Manager::addSubscriber()` `mongodb.tutorial.apm`
