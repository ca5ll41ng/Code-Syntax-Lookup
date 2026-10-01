---
id: "en-php-function-zookeeper-setwatcher"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::setWatcher"
title: "Set a watcher function"
signature: "public bool Zookeeper::setWatcher(callable $watcher_cb)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.setwatcher.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Set a watcher function

## Description

```php
public bool Zookeeper::setWatcher(callable $watcher_cb)
```

## Parameters

- **`$watcher_cb`** — A watch will be set at the server to notify the client if the node changes.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to set watcher.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::exists()` `Zookeeper::get()` `ZookeeperException`
