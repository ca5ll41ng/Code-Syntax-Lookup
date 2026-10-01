---
id: "en-php-function-zookeeper-set"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::set"
title: "Sets the data associated with a node"
signature: "public bool Zookeeper::set(string $path, string $value, int $version = -1, array $stat = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.set.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the data associated with a node

## Description

```php
public bool Zookeeper::set(string $path, string $value, int $version = -1, array $stat = null)
```

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.
- **`$value`** — The data to be stored in the node.
- **`$version`** — The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.
- **`$stat`** — If not NULL, will hold the value of stat for the path on return.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to save value to node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::set()` example**

Save value to node.

```php


<?php
$zookeeper = new Zookeeper('localhost:2181');
$path = '/path/to/node';
$value = 'nodevalue';
$r = $zookeeper->set($path, $value);
if ($r)
  echo 'SUCCESS';
else
  echo 'ERR';
?>

   
```

The above example will output:

```text


SUCCESS

   
```

## See Also

 `Zookeeper::create()` `Zookeeper::get()` `ZookeeperException`
