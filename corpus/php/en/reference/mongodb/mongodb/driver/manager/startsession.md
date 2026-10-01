---
id: "en-php-function-mongodb-driver-manager-startsession"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::startSession"
title: "Start a new client session for use with this client"
signature: "final public MongoDB\\Driver\\Session MongoDB\\Driver\\Manager::startSession(array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.startsession.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Start a new client session for use with this client

## Description

```php
final public MongoDB\Driver\Session MongoDB\Driver\Manager::startSession(array|null $options = null)
```

Creates a `MongoDB\Driver\Session` for the given options. The session may then be specified when executing commands, queries, and write operations.

> A `MongoDB\Driver\Session` can only be used with the `MongoDB\Driver\Manager` from which it was created.

## Parameters

- **`$options`** — | Option | Type | Description | Default | | --- | --- | --- | --- | | causalConsistency | `bool` | Configure causal consistency in a session. If `true`, each operation in the session will be causally ordered after the previous read or write operation. Set to `false` to disable causal consistency. See [Causal Consistency](core/read-isolation-consistency-recency/#causal-consistency) in the MongoDB manual for more information. | `true` | | defaultTransactionOptions | `array` | Default options to apply to newly created transactions. These options are used unless they are overridden when a transaction is started with different value for each option. \| Option \| Type \| Description \| \| --- \| --- \| --- \| \| maxCommitTimeMS \| integer \| The maximum amount of time in milliseconds to allow a single `commitTransaction` command to run. If specified, `maxCommitTimeMS` must be a signed 32-bit integer greater than or equal to zero. \| \| readConcern \| `MongoDB\Driver\ReadConcern` \| A read concern to apply to the operation. This option is available in MongoDB 3.2+ and will result in an exception at execution time if specified for an older server version. \| \| readPreference \| `MongoDB\Driver\ReadPreference` \| A read preference to use for selecting a server for the operation. \| \| writeConcern \| `MongoDB\Driver\WriteConcern` \| A write concern to apply to the operation. \| This option is available in MongoDB 4.0+. | `[]` | | snapshot | `bool` | Configure snapshot reads in a session. If `true`, a timestamp will be obtained from the first supported read operation in the session (i.e. `find`, `aggregate`, or unsharded `distinct`). Subsequent read operations within the session will then utilize a `"snapshot"` read concern level to read majority-committed data from that timestamp. Set to `false` to disable snapshot reads. Snapshot reads require MongoDB 5.0+ and cannot be used with causal consistency, transactions, or write operations. If `"snapshot"` is `true`, `"causalConsistency"` will default to `false`. See [Read Concern "snapshot"](reference/read-concern-snapshot/#read-concern-and-atclustertime) in the MongoDB manual for more information. | `false` |

## Return Values

Returns a `MongoDB\Driver\Session`.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"causalConsistency"` and `"snapshot"` options are both `true`. Throws `MongoDB\Driver\Exception\RuntimeException` if the session could not be created (e.g. libmongoc does not support crypto). 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.11.0 | The `"snapshot"` option was added. |
| PECL mongodb 1.6.0 | The `"maxCommitTimeMS"` option was added to `"defaultTransactionOptions"`. |
| PECL mongodb 1.5.0 | The `"defaultTransactionOptions"` option was added. |

## See Also

 `MongoDB\Driver\Session` [Causal Consistency](core/read-isolation-consistency-recency/#causal-consistency) in the MongoDB manual
