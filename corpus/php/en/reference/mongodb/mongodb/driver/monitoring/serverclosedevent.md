---
id: "en-php-guide-class-mongodb-driver-monitoring-serverclosedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-serverclosedevent"
title: "The MongoDB\\Driver\\Monitoring\\ServerClosedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-serverclosedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\ServerClosedEvent class

MongoDB\Driver\Monitoring\ServerClosedEvent

   Introduction  The `MongoDB\Driver\Monitoring\ServerClosedEvent` class encapsulates information about a closed server. This corresponds to an existing server being removed from the topology.      Class Synopsis   `MongoDB\Driver\Monitoring\ServerClosedEvent`   `final`  `MongoDB\Driver\Monitoring\ServerClosedEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `MongoDB\BSON\ObjectId` `topologyId`         Properties 
- **`host`** — The hostname of the server.
- **`port`** — The port of the server.
- **`topologyId`** — The topology ID.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
