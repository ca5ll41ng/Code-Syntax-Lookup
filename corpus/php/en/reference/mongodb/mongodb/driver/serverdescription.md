---
id: "en-php-guide-class-mongodb-driver-serverdescription"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-serverdescription"
title: "The MongoDB\\Driver\\ServerDescription class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-serverdescription.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\ServerDescription class

MongoDB\Driver\ServerDescription

   Introduction  The `MongoDB\Driver\ServerDescription` class is a value object that represents a server to which the driver is connected. Instances of this class are returned by `MongoDB\Driver\Server::getServerDescription()` and `MongoDB\Driver\Monitoring\ServerChangedEvent` methods.      Class Synopsis   `MongoDB\Driver\ServerDescription`   `final`  `MongoDB\Driver\ServerDescription`      `const` `string` `MongoDB\Driver\ServerDescription::TYPE_UNKNOWN` "Unknown"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_STANDALONE` "Standalone"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_MONGOS` "Mongos"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_POSSIBLE_PRIMARY` "PossiblePrimary"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_RS_PRIMARY` "RSPrimary"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_RS_SECONDARY` "RSSecondary"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_RS_ARBITER` "RSArbiter"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_RS_OTHER` "RSOther"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_RS_GHOST` "RSGhost"   `const` `string` `MongoDB\Driver\ServerDescription::TYPE_LOAD_BALANCER` "LoadBalancer"         Predefined Constants 
- **`MongoDB\Driver\ServerDescription::TYPE_UNKNOWN`** — Unknown server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
- **`MongoDB\Driver\ServerDescription::TYPE_STANDALONE`** — Standalone server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
- **`MongoDB\Driver\ServerDescription::TYPE_MONGOS`** — Mongos server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
- **`MongoDB\Driver\ServerDescription::TYPE_POSSIBLE_PRIMARY`** — Replica set possible primary server type, returned by `MongoDB\Driver\ServerDescription::getType()`. — A server may be identified as a possible primary if it has not yet been checked but another memory of the replica set thinks it is the primary.
- **`MongoDB\Driver\ServerDescription::TYPE_RS_PRIMARY`** — Replica set primary server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
- **`MongoDB\Driver\ServerDescription::TYPE_RS_SECONDARY`** — Replica set secondary server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
- **`MongoDB\Driver\ServerDescription::TYPE_RS_ARBITER`** — Replica set arbiter server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
- **`MongoDB\Driver\ServerDescription::TYPE_RS_OTHER`** — Replica set other server type, returned by `MongoDB\Driver\ServerDescription::getType()`. — Such servers may be hidden, starting up, or recovering. They cannot be queried, but their hosts lists are useful for discovering the current replica set configuration.
- **`MongoDB\Driver\ServerDescription::TYPE_RS_GHOST`** — Replica set ghost server type, returned by `MongoDB\Driver\ServerDescription::getType()`. — Servers may be identified as such in at least three situations: briefly during server startup; in an uninitialized replica set; or when the server is shunned (i.e. removed from the replica set config). They cannot be queried, nor can their host list be used to discover the current replica set configuration; however, the client may monitor this server in hope that it transitions to a more useful state.
- **`MongoDB\Driver\ServerDescription::TYPE_LOAD_BALANCER`** — Load balancer server type, returned by `MongoDB\Driver\ServerDescription::getType()`.
