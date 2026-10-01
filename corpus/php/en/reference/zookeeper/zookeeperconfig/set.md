---
id: "en-php-function-zookeeperconfig-set"
language: "php"
lang: "en"
category: "function"
name: "ZookeeperConfig::set"
title: "Change ZK cluster ensemble membership and roles of ensemble peers"
signature: "public void ZookeeperConfig::set(string $members, int $version = -1, array $stat = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeperconfig.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Change ZK cluster ensemble membership and roles of ensemble peers

## Description

```php
public void ZookeeperConfig::set(string $members, int $version = -1, array $stat = null)
```

## Parameters

- **`$members`** — Comma separated list of new membership (e.g., contents of a membership configuration file) - for use only with a non-incremental reconfiguration.
- **`$version`** — The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.
- **`$stat`** — If not NULL, will hold the value of stat for the path on return.

## Return Values

No value is returned.

## Errors/Exceptions

This method emits `ZookeeperException` and its derivatives when parameters count or types are wrong or fail to save value to node.

## Examples

**`ZookeeperConfig::set()` example**

Reconfig.

```php


<?php
$client = new Zookeeper();
$client->connect('localhost:2181');
$client->addAuth('digest', 'timandes:timandes');
$zkConfig = $client->getConfig();
$zkConfig->set("server.1=localhost:2888:3888:participant;0.0.0.0:2181");
?>

   
```

## See Also

 `ZookeeperConfig::get()` `ZookeeperConfig::add()` `ZookeeperConfig::remove()` `ZookeeperException`
