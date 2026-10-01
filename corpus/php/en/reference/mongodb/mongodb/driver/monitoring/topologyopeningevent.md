---
id: "en-php-guide-class-mongodb-driver-monitoring-topologyopeningevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-topologyopeningevent"
title: "The MongoDB\\Driver\\Monitoring\\TopologyOpeningEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-topologyopeningevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\TopologyOpeningEvent class

MongoDB\Driver\Monitoring\TopologyOpeningEvent

   Introduction  The `MongoDB\Driver\Monitoring\TopologyOpeningEvent` class encapsulates information about an opened topology.   
> Due to the driver's connection handling and persistence behavior, this event may not be observed if a `MongoDB\Driver\Manager` uses a previously persisted [libmongoc]() client.

    Class Synopsis   `MongoDB\Driver\Monitoring\TopologyOpeningEvent`   `final`  `MongoDB\Driver\Monitoring\TopologyOpeningEvent`      `public` `readonly` `MongoDB\BSON\ObjectId` `topologyId`         Properties 
- **`topologyId`** — The topology ID.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
