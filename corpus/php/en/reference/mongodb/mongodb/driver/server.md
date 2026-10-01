---
id: "en-php-guide-class-mongodb-driver-server"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-server"
title: "The MongoDB\\Driver\\Server class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-server.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\Server class

MongoDB\Driver\Server

   Introduction       Class Synopsis   `MongoDB\Driver\Server`   `final`  `MongoDB\Driver\Server`      `const` `int` `MongoDB\Driver\Server::TYPE_UNKNOWN` 0   `const` `int` `MongoDB\Driver\Server::TYPE_STANDALONE` 1   `const` `int` `MongoDB\Driver\Server::TYPE_MONGOS` 2   `const` `int` `MongoDB\Driver\Server::TYPE_POSSIBLE_PRIMARY` 3   `const` `int` `MongoDB\Driver\Server::TYPE_RS_PRIMARY` 4   `const` `int` `MongoDB\Driver\Server::TYPE_RS_SECONDARY` 5   `const` `int` `MongoDB\Driver\Server::TYPE_RS_ARBITER` 6   `const` `int` `MongoDB\Driver\Server::TYPE_RS_OTHER` 7   `const` `int` `MongoDB\Driver\Server::TYPE_RS_GHOST` 8   `const` `int` `MongoDB\Driver\Server::TYPE_LOAD_BALANCER` 9         Predefined Constants 
- **`MongoDB\Driver\Server::TYPE_UNKNOWN`** — Unknown server type, returned by `MongoDB\Driver\Server::getType()`.
- **`MongoDB\Driver\Server::TYPE_STANDALONE`** — Standalone server type, returned by `MongoDB\Driver\Server::getType()`.
- **`MongoDB\Driver\Server::TYPE_MONGOS`** — Mongos server type, returned by `MongoDB\Driver\Server::getType()`.
- **`MongoDB\Driver\Server::TYPE_POSSIBLE_PRIMARY`** — Replica set possible primary server type, returned by `MongoDB\Driver\Server::getType()`. — A server may be identified as a possible primary if it has not yet been checked but another member of the replica set thinks it is the primary.
- **`MongoDB\Driver\Server::TYPE_RS_PRIMARY`** — Replica set primary server type, returned by `MongoDB\Driver\Server::getType()`.
- **`MongoDB\Driver\Server::TYPE_RS_SECONDARY`** — Replica set secondary server type, returned by `MongoDB\Driver\Server::getType()`.
- **`MongoDB\Driver\Server::TYPE_RS_ARBITER`** — Replica set arbiter server type, returned by `MongoDB\Driver\Server::getType()`.
- **`MongoDB\Driver\Server::TYPE_RS_OTHER`** — Replica set other server type, returned by `MongoDB\Driver\Server::getType()`. — Such servers may be hidden, starting up, or recovering. They cannot be queried, but their hosts lists are useful for discovering the current replica set configuration.
- **`MongoDB\Driver\Server::TYPE_RS_GHOST`** — Replica set ghost server type, returned by `MongoDB\Driver\Server::getType()`. — Servers may be identified as such in at least three situations: briefly during server startup; in an uninitialized replica set; or when the server is shunned (i.e. removed from the replica set config). They cannot be queried, nor can their host list be used to discover the current replica set configuration; however, the client may monitor this server in hope that it transitions to a more useful state.
- **`MongoDB\Driver\Server::TYPE_LOAD_BALANCER`** — Load balancer server type, returned by `MongoDB\Driver\Server::getType()`.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 1.11.0 | Added the `MongoDB\Driver\Server::TYPE_LOAD_BALANCER` constant. |
