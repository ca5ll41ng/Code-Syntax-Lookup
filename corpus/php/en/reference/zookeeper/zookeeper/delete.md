---
id: "en-php-function-zookeeper-delete"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::delete"
title: "Delete a node in zookeeper synchronously"
signature: "public bool Zookeeper::delete(string $path, int $version = -1)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.delete.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Delete a node in zookeeper synchronously

## Description

```php
public bool Zookeeper::delete(string $path, int $version = -1)
```

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.
- **`$version`** — The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to delete node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::delete()` example**

Delete an existing node.

```php


<?php
$zookeeper = new Zookeeper('localhost:2181');
$path = '/path/to/node';
$r = $zookeeper->delete($path);
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

 `Zookeeper::create()` `Zookeeper::getChildren()` `ZookeeperException`
