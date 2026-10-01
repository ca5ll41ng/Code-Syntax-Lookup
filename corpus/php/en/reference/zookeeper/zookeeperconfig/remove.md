---
id: "en-php-function-zookeeperconfig-remove"
language: "php"
lang: "en"
category: "function"
name: "ZookeeperConfig::remove"
title: "Remove servers from the ensemble"
signature: "public void ZookeeperConfig::remove(string $id_list, int $version = -1, array $stat = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeperconfig.remove.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Remove servers from the ensemble

## Description

```php
public void ZookeeperConfig::remove(string $id_list, int $version = -1, array $stat = null)
```

## Parameters

- **`$id_list`** — Comma separated list of server IDs to be removed from the ensemble. Each has an id of a server to be removed, only for maj. quorums.
- **`$version`** — The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.
- **`$stat`** — If not NULL, will hold the value of stat for the path on return.

## Return Values

No value is returned.

## Errors/Exceptions

This method emits `ZookeeperException` and its derivatives when parameters count or types are wrong or fail to save value to node.

## Examples

**`ZookeeperConfig::remove()` example**

Remove members.

```php


<?php
$client = new Zookeeper();
$client->connect('localhost:2181');
$client->addAuth('digest', 'timandes:timandes');
$zkConfig = $client->getConfig();
$zkConfig->set("server.1=localhost:2888:3888:participant;0.0.0.0:2181,server.2=localhost:2889:3889:participant;0.0.0.0:2182");
$zkConfig->remove("2");
echo $zkConfig->get();
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

 `ZookeeperConfig::get()` `ZookeeperConfig::add()` `ZookeeperConfig::set()` `ZookeeperException`
