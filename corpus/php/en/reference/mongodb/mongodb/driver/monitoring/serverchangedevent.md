---
id: "en-php-guide-class-mongodb-driver-monitoring-serverchangedevent"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-monitoring-serverchangedevent"
title: "The MongoDB\\Driver\\Monitoring\\ServerChangedEvent class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-monitoring-serverchangedevent.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Monitoring\ServerChangedEvent class

MongoDB\Driver\Monitoring\ServerChangedEvent

   Introduction  The `MongoDB\Driver\Monitoring\ServerChangedEvent` class encapsulates information about a changed server description. For example, a server's type changing from secondary to primary would cause its server description to change.      Class Synopsis   `MongoDB\Driver\Monitoring\ServerChangedEvent`   `final`  `MongoDB\Driver\Monitoring\ServerChangedEvent`      `public` `readonly` `string` `host`   `public` `readonly` `int` `port`   `public` `readonly` `MongoDB\BSON\ObjectId` `topologyId`   `public` `readonly` `MongoDB\Driver\ServerDescription` `newDescription`   `public` `readonly` `MongoDB\Driver\ServerDescription` `previousDescription`         Properties 
- **`host`** — The hostname of the server.
- **`port`** — The port of the server.
- **`topologyId`** — The topology ID.
- **`newDescription`** — The new server description.
- **`previousDescription`** — The previous server description.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
