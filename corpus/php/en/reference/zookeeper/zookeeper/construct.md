---
id: "en-php-function-zookeeper-construct"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::__construct"
title: "Create a handle to used communicate with zookeeper"
signature: "public Zookeeper::__construct(string $host = '', callable $watcher_cb = null, int $recv_timeout = 10000)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a handle to used communicate with zookeeper

## Description

```php
public Zookeeper::__construct(string $host = '', callable $watcher_cb = null, int $recv_timeout = 10000)
```

This method creates a new handle and a zookeeper session that corresponds to that handle. Session establishment is asynchronous, meaning that the session should not be considered established until (and unless) an event of state ZOO_CONNECTED_STATE is received.

## Parameters

- **`$host`** — comma separated host:port pairs, each corresponding to a zk server. e.g. "127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002"
- **`$watcher_cb`** — the global watcher callback function. When notifications are triggered this function will be invoked.
- **`$recv_timeout`** — the timeout for this session, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE).

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or could not init instance.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::connect()` `ZookeeperException`
