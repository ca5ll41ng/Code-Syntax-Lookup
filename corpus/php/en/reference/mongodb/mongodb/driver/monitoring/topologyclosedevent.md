---
id: "en-php-guide-class-mongodb-driver-monitoring-topologyclosedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-topologyclosedevent"
title: "The MongoDB\\Driver\\Monitoring\\TopologyClosedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-topologyclosedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\TopologyClosedEvent class

MongoDB\Driver\Monitoring\TopologyClosedEvent

   Introduction  The `MongoDB\Driver\Monitoring\TopologyClosedEvent` class encapsulates information about a closed topology.   
> Due to the driver's connection handling and persistence behavior, this event can only be observed when a `MongoDB\Driver\Manager` is created with the `"disableClientPersistence"` driver option and freed before request shutdown (RSHUTDOWN).

    Class Synopsis   `MongoDB\Driver\Monitoring\TopologyClosedEvent`   `final`  `MongoDB\Driver\Monitoring\TopologyClosedEvent`      `public` `readonly` `MongoDB\BSON\ObjectId` `topologyId`         Properties 
- **`topologyId`** — The topology ID.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
