---
id: "en-php-function-mongodb-driver-monitoring-logsubscriber-log"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Monitoring\\LogSubscriber::log"
title: "Notification method for a log message"
signature: "abstract public void MongoDB\\Driver\\Monitoring\\LogSubscriber::log(int $level, string $domain, string $message)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-monitoring-logsubscriber.log.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Notification method for a log message

## Description

```php
abstract public void MongoDB\Driver\Monitoring\LogSubscriber::log(int $level, string $domain, string $message)
```

If the subscriber is registered, this method is called for each logged message.

## Parameters

- **`$level`** — The severity level. This will be one of the interface constants.
- **`$domain`** — The name of the driver component that emitted the log message.
- **`$message`** — The log message.

## Return Values

No value is returned.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. 

## See Also

 `MongoDB\Driver\Monitoring\addSubscriber()`
