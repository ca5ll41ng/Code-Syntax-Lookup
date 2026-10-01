---
id: "en-php-function-zookeeper-getchildren"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::getChildren"
title: "Lists the children of a node synchronously"
signature: "public array Zookeeper::getChildren(string $path, callable $watcher_cb = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.getchildren.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Lists the children of a node synchronously

## Description

```php
public array Zookeeper::getChildren(string $path, callable $watcher_cb = null)
```

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.
- **`$watcher_cb`** — If nonzero, a watch will be set at the server to notify the client if the node changes.

## Return Values

Returns an array with children paths on success, and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to list children of a node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::getChildren()` example**

Lists children of a node.

```php


<?php

$zookeeper = new Zookeeper('localhost:2181');
$path = '/zookeeper';
$r = $zookeeper->getchildren($path);

if ($r) {
    var_dump($r);
} else {
    echo 'ERR';
}

?>

   
```

The above example will output:

```text


array(1) {
  [0]=>
  string(6) "config"
}

   
```

## See Also

 `Zookeeper::create()` `Zookeeper::delete()` `ZookeeperException`
