---
id: "en-php-guide-class-mongodb-driver-monitoring-topologychangedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-topologychangedevent"
title: "The MongoDB\\Driver\\Monitoring\\TopologyChangedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-topologychangedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\TopologyChangedEvent class

MongoDB\Driver\Monitoring\TopologyChangedEvent

   Introduction  The `MongoDB\Driver\Monitoring\TopologyChangedEvent` class encapsulates information about a changed topology description. For example, a topology discovering a new replica set primary would cause its topology description to change.      Class Synopsis   `MongoDB\Driver\Monitoring\TopologyChangedEvent`   `final`  `MongoDB\Driver\Monitoring\TopologyChangedEvent`      `public` `readonly` `MongoDB\BSON\ObjectId` `topologyId`   `public` `readonly` `MongoDB\Driver\TopologyDescription` `newDescription`   `public` `readonly` `MongoDB\Driver\TopologyDescription` `previousDescription`         Properties 
- **`topologyId`** — The topology ID.
- **`newDescription`** — The new topology description.
- **`previousDescription`** — The previous topology description.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
