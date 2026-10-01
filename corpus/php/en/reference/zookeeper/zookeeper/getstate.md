---
id: "en-php-function-zookeeper-getstate"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::getState"
title: "Get the state of the zookeeper connection"
signature: "public int Zookeeper::getState()"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.getstate.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Get the state of the zookeeper connection

## Description

```php
public int Zookeeper::getState()
```

## Parameters

This function has no parameters.

## Return Values

Returns the state of zookeeper connection on success, and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when it fails to get state of zookeeper connection.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::__construct()` `Zookeeper::connect()` `Zookeeper::getClientId()` ZooKeeper States `ZookeeperException`
