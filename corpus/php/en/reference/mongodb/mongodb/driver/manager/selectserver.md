---
id: "en-php-function-mongodb-driver-manager-selectserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Manager::selectServer"
title: "Select a server matching a read preference"
signature: "final public MongoDB\\Driver\\Server MongoDB\\Driver\\Manager::selectServer(MongoDB\\Driver\\ReadPreference|null $readPreference = null)"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-manager.selectserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Select a server matching a read preference

## Description

```php
final public MongoDB\Driver\Server MongoDB\Driver\Manager::selectServer(MongoDB\Driver\ReadPreference|null $readPreference = null)
```

Selects a `MongoDB\Driver\Server` matching `$readPreference`. If `$readPreference` is `null` or omitted, the primary server will be selected by default. This may be used to preselect a server in order to perform version checking before executing an operation.

> Unlike `MongoDB\Driver\Manager::getServers()`, this method will initialize database connections and perform server discovery if necessary. See the [Server Selection Specification](#single-threaded-server-selection) for additional information.

## Parameters

- **`$readPreference` (`MongoDB\Driver\ReadPreference`)** — The read preference to use for selecting a server. If `null` or omitted, the primary server will be selected by default.

## Return Values

Returns a `MongoDB\Driver\Server` matching the read preference.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.Throws `MongoDB\Driver\Exception\ConnectionException` if connection to the server fails (for reasons other than authentication).Throws `MongoDB\Driver\Exception\AuthenticationException` if authentication is needed and fails. Throws `MongoDB\Driver\Exception\RuntimeException` if a server matching the read preference could not be found. 

## Changelog

|  |  |
| --- | --- |
| PECL mongodb 1.11.0 | The `$readPreference` is now optional. If `null` or omitted, the primary server will be selected by default. |

## See Also

 `MongoDB\Driver\Server` `MongoDB\Driver\Manager::getServers()` [Server Selection Specification]()
