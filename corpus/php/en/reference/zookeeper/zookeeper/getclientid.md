---
id: "en-php-function-zookeeper-getclientid"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::getClientId"
title: "Return the client session id, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE)"
signature: "public int Zookeeper::getClientId()"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.getclientid.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Return the client session id, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE)

## Description

```php
public int Zookeeper::getClientId()
```

## Parameters

This function has no parameters.

## Return Values

Returns the client session id on success, and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when it could not get client session id.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::__construct()` `Zookeeper::connect()` `Zookeeper::getState()` ZooKeeper States `ZookeeperException`
