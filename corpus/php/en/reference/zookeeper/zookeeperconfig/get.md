---
id: "en-php-function-zookeeperconfig-get"
language: "php"
lang: "en"
category: "function"
name: "ZookeeperConfig::get"
title: "Gets the last committed configuration of the ZooKeeper cluster as it is known to the server to which the client is connected, synchronously"
signature: "public string ZookeeperConfig::get(callable $watcher_cb = null, array $stat = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeperconfig.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the last committed configuration of the ZooKeeper cluster as it is known to the server to which the client is connected, synchronously

## Description

```php
public string ZookeeperConfig::get(callable $watcher_cb = null, array $stat = null)
```

## Parameters

- **`$watcher_cb`** — If nonzero, a watch will be set at the server to notify the client if the node changes.
- **`$stat`** — If not NULL, will hold the value of stat for the path on return.

## Return Values

Returns the configuration string on success, and false on failure.

## Errors/Exceptions

This method emits `ZookeeperException` and its derivatives when parameters count or types are wrong or fail to get configuration.

## Examples

**`ZookeeperConfig::get()` example**

Get configuration.

```php


<?php
$zk = new Zookeeper();
$zk->connect('localhost:2181');
$zk->addAuth('digest', 'timandes:timandes');
$zkConfig = $zk->getConfig();
$r = $zkConfig->get();
if ($r)
  echo $r;
else
  echo 'ERR';
?>

   
```

The above example will output:

```text


server.1=localhost:2888:3888:participant;0.0.0.0:2181
version=0xca01e881a2

   
```

## See Also

 `ZookeeperConfig::set()` `ZookeeperConfig::add()` `ZookeeperConfig::remove()` `ZookeeperException`
