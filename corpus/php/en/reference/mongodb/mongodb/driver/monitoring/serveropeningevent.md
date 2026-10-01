---
id: "en-php-guide-class-mongodb-driver-monitoring-serveropeningevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-serveropeningevent"
title: "The MongoDB\\Driver\\Monitoring\\ServerOpeningEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-serveropeningevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\ServerOpeningEvent class

MongoDB\Driver\Monitoring\ServerOpeningEvent

   Introduction  The `MongoDB\Driver\Monitoring\ServerOpeningEvent` class encapsulates information about an opened server. This corresponds to a new server being added to the topology.      Class Synopsis   `MongoDB\Driver\Monitoring\ServerOpeningEvent`   `final`  `MongoDB\Driver\Monitoring\ServerOpeningEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `MongoDB\BSON\ObjectId` `topologyId`         Properties 
- **`host`** — The hostname of the server.
- **`port`** — The port of the server.
- **`topologyId`** — The topology ID.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
