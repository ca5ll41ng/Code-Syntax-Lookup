---
id: "en-php-function-zookeeper-setdebuglevel"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::setDebugLevel"
title: "Sets the debugging level for the library"
signature: "public static bool Zookeeper::setDebugLevel(int $logLevel)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.setdebuglevel.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the debugging level for the library

## Description

```php
public static bool Zookeeper::setDebugLevel(int $logLevel)
```

## Parameters

- **`$logLevel`** — ZooKeeper log level constants.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to set debug level.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::setDebugLevel()` example**

Set debugl level.

```php


<?php
$r = Zookeeper::setDebugLevel(Zookeeper::LOG_LEVEL_WARN);
if ($r)
  echo 'SUCCESS';
else
  echo 'ERR';
?>
?>

   
```

The above example will output:

```text


SUCCESS

   
```

## See Also

 ZooKeeper Log Levels `ZookeeperException`
