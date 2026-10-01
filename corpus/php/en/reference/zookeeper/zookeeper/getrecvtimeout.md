---
id: "en-php-function-zookeeper-getrecvtimeout"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::getRecvTimeout"
title: "Return the timeout for this session, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE). This value may change after a server re-connect"
signature: "public int Zookeeper::getRecvTimeout()"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.getrecvtimeout.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the timeout for this session, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE). This value may change after a server re-connect

## Description

```php
public int Zookeeper::getRecvTimeout()
```

## Parameters

This function has no parameters.

## Return Values

Returns the timeout for this session on success, and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when operation fails.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::__construct()` `Zookeeper::connect()` `ZookeeperException`
