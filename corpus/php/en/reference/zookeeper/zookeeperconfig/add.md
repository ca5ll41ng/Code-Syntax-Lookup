---
id: "en-php-function-zookeeperconfig-add"
language: "php"
lang: "en"
category: "function"
name: "ZookeeperConfig::add"
title: "Add servers to the ensemble"
signature: "public void ZookeeperConfig::add(string $members, int $version = -1, array $stat = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeperconfig.add.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Add servers to the ensemble

## Description

```php
public void ZookeeperConfig::add(string $members, int $version = -1, array $stat = null)
```

## Parameters

- **`$members`** — Comma separated list of servers to be added to the ensemble. Each has a configuration line for a server to be added (as would appear in a configuration file), only for maj. quorums.
- **`$version`** — The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.
- **`$stat`** — If not NULL, will hold the value of stat for the path on return.

## Return Values

No value is returned.

## Errors/Exceptions

This method emits `ZookeeperException` and its derivatives when parameters count or types are wrong or fail to save value to node.

## Examples

**`ZookeeperConfig::add()` example**

Add members.

```php


<?php
$client = new Zookeeper();
$client->connect('localhost:2181');
$client->addAuth('digest', 'timandes:timandes');
$zkConfig = $client->getConfig();
$zkConfig->set("server.1=localhost:2888:3888:participant;0.0.0.0:2181");
$zkConfig->add("server.2=localhost:2889:3889:participant;0.0.0.0:2182");
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
server.2=localhost:2889:3889:participant;0.0.0.0:2182
version=0xca01e881a2

   
```

## See Also

 `ZookeeperConfig::get()` `ZookeeperConfig::set()` `ZookeeperConfig::remove()` `ZookeeperException`
