---
id: "en-php-guide-class-mongodb-driver-monitoring-sdamsubscriber"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-sdamsubscriber"
title: "The MongoDB\\Driver\\Monitoring\\SDAMSubscriber interface"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-sdamsubscriber.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\SDAMSubscriber interface

MongoDB\Driver\Monitoring\SDAMSubscriber

   Introduction  Classes may implement this interface to register an event subscriber that is notified for various SDAM events. See the [Server Discovery and Monitoring]() and [SDAM Monitoring]() specifications for additional information.         `MongoDB\Driver\Monitoring\SDAMSubscriber`    `MongoDB\Driver\Monitoring\SDAMSubscriber`   MongoDB\Driver\Monitoring\Subscriber          Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | Return types previously declared as tentative are now enforced. |
| PECL mongodb 1.15.0 | Return types for methods are declared as tentative on PHP 8.0 and newer, triggering deprecation notices in code that implements this interface without declaring the appropriate return types. The #[ReturnTypeWillChange] attribute can be added to silence the deprecation notice. |
