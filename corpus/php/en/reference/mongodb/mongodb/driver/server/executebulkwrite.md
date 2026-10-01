---
id: "en-php-function-mongodb-driver-server-executebulkwrite"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::executeBulkWrite"
title: "Execute one or more write operations on this server"
signature: "final public MongoDB\\Driver\\WriteResult MongoDB\\Driver\\Server::executeBulkWrite(string $namespace, MongoDB\\Driver\\BulkWrite $bulk, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.executebulkwrite.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute one or more write operations on this server

## Description

```php
final public MongoDB\Driver\WriteResult MongoDB\Driver\Server::executeBulkWrite(string $namespace, MongoDB\Driver\BulkWrite $bulk, array|null $options = null)
```

Executes one or more write operations on this server.

A `MongoDB\Driver\BulkWrite` can be constructed with one or more write operations of varying types (e.g. updates, deletes, and inserts). The driver will attempt to send operations of the same type to the server in as few requests as possible to optimize round trips.

The default value for the `"writeConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

## Parameters

- **`$namespace` (`string`)** — A fully qualified namespace (e.g. `"databaseName.collectionName"`).
- **`$bulk` (`MongoDB\Driver\BulkWrite`)** — The write(s) to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | session | `MongoDB\Driver\Session` | A session to associate with the operation. | | writeConcern | `MongoDB\Driver\WriteConcern` | A write concern to apply to the operation. |

## Return Values

Returns `MongoDB\Driver\WriteResult` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` does not contain any write operations. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if `$bulk` has already been executed. `MongoDB\Driver\BulkWrite` objects may not be executed multiple times. Throws `MongoDB\Driver\Exception\InvalidArgumentException` if the `"session"` option is used in combination with an unacknowledged write concern. Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\BulkWriteException` on any write failure (e.g. write error, failure to apply a write concern) Throws `MongoDB\Driver\Exception\RuntimeException` on other errors. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `$options` parameter no longer accepts a `MongoDB\Driver\WriteConcern` instance. |
| PECL mongodb 1.21.0 | Passing a `MongoDB\Driver\WriteConcern` object as `$options` is deprecated and will be removed in 2.0. |
| PECL mongodb 1.4.4 | `MongoDB\Driver\Exception\InvalidArgumentException` will be thrown if the `"session"` option is used in combination with an unacknowledged write concern. |
| PECL mongodb 1.4.0 | The third parameter is now an `$options` array. For backwards compatibility, this parameter will still accept a `MongoDB\Driver\WriteConcern` object. |
| PECL mongodb 1.3.0 | `MongoDB\Driver\Exception\InvalidArgumentException` is now thrown if `$bulk` does not contain any write operations. Previously, a `MongoDB\Driver\Exception\BulkWriteException` was thrown. |

## Notes

> It is the caller's responsibility to ensure that the server is capable of executing the write operation. For example, executing a write operation on a secondary (excluding its "local" database) will fail.

## See Also

 `MongoDB\Driver\BulkWrite` `MongoDB\Driver\WriteResult` `MongoDB\Driver\WriteConcern` `MongoDB\Driver\Manager::executeBulkWrite()`
