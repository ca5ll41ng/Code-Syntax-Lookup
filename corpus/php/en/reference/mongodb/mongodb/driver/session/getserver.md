---
id: "en-php-function-mongodb-driver-session-getserver"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Session::getServer"
title: "Returns the server to which this session is pinned"
signature: "final public MongoDB\\Driver\\Server|null MongoDB\\Driver\\Session::getServer()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-session.getserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Returns the server to which this session is pinned

## Description

```php
final public MongoDB\Driver\Server|null MongoDB\Driver\Session::getServer()
```

Returns the `MongoDB\Driver\Server` to which this session is pinned. If the session is not pinned to a server, `null` will be returned.

Session pinning is primarily used for sharded transactions, as all commands within a sharded transaction must be sent to the same mongos instance. This method is intended to be used by libraries built atop the extension to allow use of a pinned server instead of invoking server selection.

## Parameters

This function has no parameters.

## Return Values

Returns the `MongoDB\Driver\Server` to which this session is pinned, or `null` if the session is not pinned to any server.

## Errors/Exceptions

 Throws `MongoDB\Driver\Exception\InvalidArgumentException` on argument parsing errors.
