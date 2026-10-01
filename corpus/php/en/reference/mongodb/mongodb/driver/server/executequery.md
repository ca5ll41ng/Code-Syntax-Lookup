---
id: "en-php-function-mongodb-driver-server-executequery"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::executeQuery"
title: "Execute a database query on this server"
signature: "final public MongoDB\\Driver\\Cursor MongoDB\\Driver\\Server::executeQuery(string $namespace, MongoDB\\Driver\\Query $query, array|null $options = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.executequery.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Execute a database query on this server

## Description

```php
final public MongoDB\Driver\Cursor MongoDB\Driver\Server::executeQuery(string $namespace, MongoDB\Driver\Query $query, array|null $options = null)
```

Executes the query on this server.

Default values for the `"readPreference"` option and Query's `"readConcern"` option will be inferred from an active transaction (indicated by the `"session"` option), followed by the connection URI.

> The `"readPreference"` option does not control the server to which the driver issues the operation; it will always be executed on this server object. Instead, it may be used when issuing the operation to a secondary (from a replica set connection, not standalone) or mongos node to ensure that the driver sets the wire protocol accordingly or adds the read preference to the operation, respectively.

## Parameters

- **`$namespace` (`string`)** — A fully qualified namespace (e.g. `"databaseName.collectionName"`).
- **`$query` (`MongoDB\Driver\Query`)** — The query to execute.
- **`$options`** — | Option | Type | Description | | --- | --- | --- | | readPreference | `MongoDB\Driver\ReadPreference` | A read preference to use for selecting a server for the operation. | | session | `MongoDB\Driver\Session` | A session to associate with the operation. |

## Return Values

Returns `MongoDB\Driver\Cursor` on success.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` on other errors (e.g. invalid query operators). 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 2.0.0 | The `$options` parameter no longer accepts a `MongoDB\Driver\ReadPreference` instance. |
| PECL mongodb 1.21.0 | Passing a `MongoDB\Driver\ReadPreference` object as `$options` is deprecated and will be removed in 2.0. |
| PECL mongodb 1.4.0 | The third parameter is now an `$options` array. For backwards compatibility, this parameter will still accept a `MongoDB\Driver\ReadPreference` object. |

## See Also

 `MongoDB\Driver\Cursor` `MongoDB\Driver\Query` `MongoDB\Driver\ReadPreference` `MongoDB\Driver\Manager::executeQuery()`
