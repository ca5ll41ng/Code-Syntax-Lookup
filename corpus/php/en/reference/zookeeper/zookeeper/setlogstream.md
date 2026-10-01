---
id: "en-php-function-zookeeper-setlogstream"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::setLogStream"
title: "Sets the stream to be used by the library for logging"
signature: "public bool Zookeeper::setLogStream(resource $stream)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.setlogstream.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the stream to be used by the library for logging

## Description

```php
public bool Zookeeper::setLogStream(resource $stream)
```

The zookeeper library uses stderr as its default log stream. Application must make sure the stream is writable. Passing in NULL resets the stream to its default value (stderr).

## Parameters

- **`$stream`** — The stream to be used by the library for logging.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or operation fails.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## See Also

 `Zookeeper::setDebugLevel()` `ZookeeperException`
