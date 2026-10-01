---
id: "en-php-function-mongodb-driver-server-construct"
language: "php"
lang: "en"
category: "function"
name: "MongoDB\\Driver\\Server::__construct"
title: "Create a new Server (not used)"
signature: "final private MongoDB\\Driver\\Server::__construct()"
module: "mongodb"
source_url: "https://www.php.net/manual/en/mongodb-driver-server.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a new Server (not used)

## Description

```php
final private MongoDB\Driver\Server::__construct()
```

`MongoDB\Driver\Server` objects are created internally by `MongoDB\Driver\Manager` when a database connection is established and may be returned by `MongoDB\Driver\Manager::getServers()` and `MongoDB\Driver\Manager::selectServer()`.

## Parameters

This function has no parameters.

## See Also

 `MongoDB\Driver\Manager::getServers()` `MongoDB\Driver\Manager::selectServer()`
