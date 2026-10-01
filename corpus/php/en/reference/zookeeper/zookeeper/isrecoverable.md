---
id: "en-php-function-zookeeper-isrecoverable"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::isRecoverable"
title: "Checks if the current zookeeper connection state can be recovered"
signature: "public bool Zookeeper::isRecoverable()"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.isrecoverable.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks if the current zookeeper connection state can be recovered

## Description

```php
public bool Zookeeper::isRecoverable()
```

The application must close the handle and try to reconnect.

## Parameters

This function has no parameters.

## Return Values

Returns true/false on success, and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when operation fails.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::__construct()` `Zookeeper::connect()` `Zookeeper::getClientId()` ZooKeeper States `ZookeeperException`
