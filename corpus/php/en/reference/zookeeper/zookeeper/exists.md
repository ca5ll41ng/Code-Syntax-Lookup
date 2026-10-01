---
id: "en-php-function-zookeeper-exists"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::exists"
title: "Checks the existence of a node in zookeeper synchronously"
signature: "public array Zookeeper::exists(string $path, callable $watcher_cb = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.exists.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Checks the existence of a node in zookeeper synchronously

## Description

```php
public array Zookeeper::exists(string $path, callable $watcher_cb = null)
```

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.
- **`$watcher_cb`** — if nonzero, a watch will be set at the server to notify the client if the node changes. The watch will be set even if the node does not

## Return Values

Returns the value of stat for the path if the given node exists, otherwise false.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to check the existence of a node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::exists()` example**

Check the existence of a node.

```php


<?php
$zookeeper = new Zookeeper('localhost:2181');
$path = '/path/to/node';
$r = $zookeeper->exists($path);
if ($r)
  echo 'EXISTS';
else
  echo 'N/A or ERR';
?>

   
```

The above example will output:

```text


EXISTS

   
```

## See Also

 `Zookeeper::get()` `ZookeeperException`
