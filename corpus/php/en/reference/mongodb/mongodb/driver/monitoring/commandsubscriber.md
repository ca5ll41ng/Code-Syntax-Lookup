---
id: "en-php-guide-class-mongodb-driver-monitoring-commandsubscriber"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-commandsubscriber"
title: "The MongoDB\\Driver\\Monitoring\\CommandSubscriber interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-commandsubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\CommandSubscriber interface

MongoDB\Driver\Monitoring\CommandSubscriber

   Introduction  Classes may implement this interface to register an event subscriber that is notified for each started, successful, and failed command event. See `mongodb.tutorial.apm` for additional information.         `MongoDB\Driver\Monitoring\CommandSubscriber`    `MongoDB\Driver\Monitoring\CommandSubscriber`   MongoDB\Driver\Monitoring\Subscriber          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.15.0 | Return types for methods are declared as tentative on PHP 8.0 and newer, triggering deprecation notices in code that implements this interface without declaring the appropriate return types. The #[ReturnTypeWillChange] attribute can be added to silence the deprecation notice. |
