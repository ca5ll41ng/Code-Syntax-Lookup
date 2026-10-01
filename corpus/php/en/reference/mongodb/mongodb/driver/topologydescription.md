---
id: "en-php-guide-class-mongodb-driver-topologydescription"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-topologydescription"
title: "The MongoDB\\Driver\\TopologyDescription class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-topologydescription.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\TopologyDescription class

MongoDB\Driver\TopologyDescription

   Introduction  The `MongoDB\Driver\TopologyDescription` class is a value object that represents a topology to which the driver is connected. Instances of this class are returned by `MongoDB\Driver\Monitoring\TopologyChangedEvent` methods.      Class Synopsis   `MongoDB\Driver\TopologyDescription`   `final`  `MongoDB\Driver\TopologyDescription`      `const` `string` `MongoDB\Driver\TopologyDescription::TYPE_UNKNOWN` "Unknown"   `const` `string` `MongoDB\Driver\TopologyDescription::TYPE_SINGLE` "Single"   `const` `string` `MongoDB\Driver\TopologyDescription::TYPE_SHARDED` "Sharded"   `const` `string` `MongoDB\Driver\TopologyDescription::TYPE_REPLICA_SET_NO_PRIMARY` "ReplicaSetNoPrimary"   `const` `string` `MongoDB\Driver\TopologyDescription::TYPE_REPLICA_SET_WITH_PRIMARY` "ReplicaSetWithPrimary"   `const` `string` `MongoDB\Driver\TopologyDescription::TYPE_LOAD_BALANCED` "LoadBalanced"         Predefined Constants 
- **`MongoDB\Driver\TopologyDescription::TYPE_UNKNOWN`** — Unknown topology type, returned by `MongoDB\Driver\TopologyDescription::getType()`.
- **`MongoDB\Driver\TopologyDescription::TYPE_SINGLE`** — Single server (i.e. direct connection), returned by `MongoDB\Driver\TopologyDescription::getType()`.
- **`MongoDB\Driver\TopologyDescription::TYPE_SHARDED`** — Sharded cluster, returned by `MongoDB\Driver\TopologyDescription::getType()`.
- **`MongoDB\Driver\TopologyDescription::TYPE_REPLICA_SET_NO_PRIMARY`** — Replica set with no primary server, returned by `MongoDB\Driver\TopologyDescription::getType()`.
- **`MongoDB\Driver\TopologyDescription::TYPE_REPLICA_SET_WITH_PRIMARY`** — Replica set with a primary server, returned by `MongoDB\Driver\TopologyDescription::getType()`.
- **`MongoDB\Driver\TopologyDescription::TYPE_LOAD_BALANCED`** — Load balanced topology, returned by `MongoDB\Driver\TopologyDescription::getType()`.
