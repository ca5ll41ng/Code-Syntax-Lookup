---
id: "en-php-function-zookeeper-create"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::create"
title: "Create a node synchronously"
signature: "public string Zookeeper::create(string $path, string $value, array $acls, int $flags = null)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.create.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Create a node synchronously

## Description

```php
public string Zookeeper::create(string $path, string $value, array $acls, int $flags = null)
```

This method will create a node in ZooKeeper. A node can only be created if it does not already exists. The Create Flags affect the creation of nodes. If ZOO_EPHEMERAL flag is set, the node will automatically get removed if the client session goes away. If the ZOO_SEQUENCE flag is set, a unique monotonically increasing sequence number is appended to the path name.

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.
- **`$value`** — The data to be stored in the node.
- **`$acls`** — The initial ACL of the node. The ACL must not be null or empty.
- **`$flags`** — this parameter can be set to 0 for normal create or an OR of the Create Flags

## Return Values

Returns the path of the new node (this might be different than the supplied path because of the ZOO_SEQUENCE flag) on success, and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to create node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::create()` example**

Create a new node.

```php


<?php
$zookeeper = new Zookeeper('localhost:2181');
$aclArray = array(
  array(
    'perms'  => Zookeeper::PERM_ALL,
    'scheme' => 'world',
    'id'     => 'anyone',
  )
);
$path = '/path/to/newnode';
$realPath = $zookeeper->create($path, null, $aclArray);
if ($realPath)
  echo $realPath;
else
  echo 'ERR';
?>

   
```

The above example will output:

```text


/path/to/newnode

   
```

## See Also

 `Zookeeper::delete()` `Zookeeper::getChildren()` ZooKeeper Permissions `ZookeeperException`
