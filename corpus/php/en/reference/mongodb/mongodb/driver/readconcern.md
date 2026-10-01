---
id: "en-php-guide-class-mongodb-driver-readconcern"
language: "php"
lang: "en"
category: "guide"
name: "class.mongodb-driver-readconcern"
title: "The MongoDB\\Driver\\ReadConcern class"
module: "mongodb"
source_url: "https://www.php.net/manual/en/class.mongodb-driver-readconcern.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The MongoDB\Driver\ReadConcern class

MongoDB\Driver\ReadConcern

   Introduction  `MongoDB\Driver\ReadConcern` controls the level of isolation for read operations for replica sets and replica set shards. This option requires MongoDB 3.2 or later.      Class Synopsis   `MongoDB\Driver\ReadConcern`   `final`  `MongoDB\Driver\ReadConcern`   MongoDB\BSON\Serializable   Serializable      `public` `readonly` `string|null` `level`    `const` `string` `MongoDB\Driver\ReadConcern::AVAILABLE` "available"   `const` `string` `MongoDB\Driver\ReadConcern::LINEARIZABLE` "linearizable"   `const` `string` `MongoDB\Driver\ReadConcern::LOCAL` "local"   `const` `string` `MongoDB\Driver\ReadConcern::MAJORITY` "majority"   `const` `string` `MongoDB\Driver\ReadConcern::SNAPSHOT` "snapshot"         Properties 
- **`level`** — The read concern level. `null` if no level was specified.

     Predefined Constants 
- **`MongoDB\Driver\ReadConcern::AVAILABLE`** — Default for reads against secondaries when `afterClusterTime`and `level` are unspecified. — The query returns the instance's most recent data. Provides no guarantee that the data has been written to a majority of the replica set members (i.e. may be rolled back). — For unsharded collections (including collections in a standalone deployment or a replica set deployment), `"local"` and `"available"` read concerns behave identically. — For a sharded cluster, `"available"` read concern provides greater tolerance for partitions since it does not wait to ensure consistency guarantees. However, a query with `"available"` read concern may return orphan documents if the shard is undergoing chunk migrations since the `"available"` read concern, unlike `"local"` read concern, does not contact the shard's primary nor the config servers for updated metadata.
- **`MongoDB\Driver\ReadConcern::LINEARIZABLE`** — The query returns data that reflects all successful writes issued with a write concern of `"majority"` *and* acknowledged prior to the start of the read operation. For replica sets that run with `writeConcernMajorityJournalDefault` set to `true`, linearizable read concern returns data that will never be rolled back. — With `writeConcernMajorityJournalDefault` set to `false`, MongoDB will not wait for `w: "majority"` writes to be durable before acknowledging the writes. As such, `"majority"` write operations could possibly roll back in the event of a loss of a replica set member. — You can specify linearizable read concern for read operations on the primary only. — Linearizable read concern guarantees only apply if read operations specify a query filter that uniquely identifies a single document.
  > Always use `maxTimeMS` with linearizable read concern in case a majority of data bearing members are unavailable. `maxTimeMS` ensures that the operation does not block indefinitely and instead ensures that the operation returns an error if the read concern cannot be fulfilled.

 — Linearizable read concern requires MongoDB 3.4.
- **`MongoDB\Driver\ReadConcern::LOCAL`** — Default for reads against primary if `level` is unspecified and for reads against secondaries if `level` is unspecified but `afterClusterTime` is specified. — The query returns the instance's most recent data. Provides no guarantee that the data has been written to a majority of the replica set members (i.e. may be rolled back).
- **`MongoDB\Driver\ReadConcern::MAJORITY`** — The query returns the instance's most recent data acknowledged as having been written to a majority of members in the replica set. — To use read concern level of `"majority"`, replica sets must use WiredTiger storage engine and election protocol version 1.
- **`MongoDB\Driver\ReadConcern::SNAPSHOT`** — Read concern `"snapshot"` is available for multi-document transactions, and starting in MongoDB 5.0, certain read operations outside of multi-document transactions. — If the transaction is not part of a causally consistent session, upon transaction commit with write concern `"majority"`, the transaction operations are guaranteed to have read from a snapshot of majority-committed data. — If the transaction is part of a causally consistent session, upon transaction commit with write concern `"majority"`, the transaction operations are guaranteed to have read from a snapshot of majority-committed data that provides causal consistency with the operation immediately preceding the transaction start. — Outside of multi-document transactions, read concern `"snapshot"` is available on primaries and secondaries for the following read operations: `find`, `aggregate`, and `distinct` (on unsharded collections). All other read commands prohibit `"snapshot"`.

    Changelog 
|  |  |
| --- | --- |
| PECL mongodb 2.3.0 | Added public `readonly` properties. |
| PECL mongodb 1.11.0 | Added the `MongoDB\Driver\ReadConcern::SNAPSHOT` constant. |
| PECL mongodb 1.7.0 | Implements Serializable. |
| PECL mongodb 1.4.0 | Added the `MongoDB\Driver\ReadConcern::AVAILABLE` constant. |
| PECL mongodb 1.2.0 | Added the `MongoDB\Driver\ReadConcern::LINEARIZABLE` constant.    Implements MongoDB\BSON\Serializable. |

   See Also  [Read Concern reference]()
