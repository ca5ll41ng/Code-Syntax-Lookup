---
id: "en-php-guide-class-mongodb-driver-monitoring-logsubscriber"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-logsubscriber"
title: "The MongoDB\\Driver\\Monitoring\\LogSubscriber interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-logsubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\LogSubscriber interface

MongoDB\Driver\Monitoring\LogSubscriber

   Introduction  Classes implementing this interface may be registered as a subscriber and receive log messages from the extension. This is similar to stream-based debug logging (i.e. mongodb.debug) except that trace-level log messages are *not* received.    As with stream-based logging, it is only possible to register a logger globally using `MongoDB\Driver\Monitoring\addSubscriber()`. The extension is not able to distinguish log messages for individual `MongoDB\Driver\Manager` objects.         `MongoDB\Driver\Monitoring\LogSubscriber`    `MongoDB\Driver\Monitoring\LogSubscriber`   MongoDB\Driver\Monitoring\Subscriber      `const` `int` `MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_ERROR` 0   `const` `int` `MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_CRITICAL` 1   `const` `int` `MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_WARNING` 2   `const` `int` `MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_MESSAGE` 3   `const` `int` `MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_INFO` 4   `const` `int` `MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_DEBUG` 5         Predefined Constants 
- **`MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_ERROR`** — Error log level. An error condition that the extension is unable to report through its API. This is the most severe log level in the extension.
- **`MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_CRITICAL`** — Critical log level. An error condition with slightly less severity. This constant exists for consistency with libmongoc; however, the extension is unlikely to use it in practice.
- **`MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_WARNING`** — Warning log level. Indicates a situation where undesirable application behavior may occur.
- **`MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_MESSAGE`** — Message or notice log level. Indicates an event that is unusual but not problematic.
- **`MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_INFO`** — Info log level. High-level information about normal driver behavior.
- **`MongoDB\Driver\Monitoring\LogSubscriber::LEVEL_DEBUG`** — Debug log level. Detailed information that may be helpful when debugging an application.
