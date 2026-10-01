---
id: "en-php-function-zookeeper-setacl"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::setAcl"
title: "Sets the acl associated with a node synchronously"
signature: "public bool Zookeeper::setAcl(string $path, int $version, array $acl)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.setacl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Sets the acl associated with a node synchronously

## Description

```php
public bool Zookeeper::setAcl(string $path, int $version, array $acl)
```

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.
- **`$version`** — The expected version of the path.
- **`$acl`** — The acl to be set on the path.

## Return Values

Returns `true` on success or `false` on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to set ACL for a node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::setAcl()` example**

Set ACL for a node.

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
$zookeeper->setAcl($path, $aclArray);

$r = $zookeeper->getAcl($path);
if ($r)
  var_dump($r);
else
  echo 'ERR';
?>

   
```

The above example will output:

```text


array(1) {
  [0]=>
  array(3) {
    ["perms"]=>
    int(31)
    ["scheme"]=>
    string(5) "world"
    ["id"]=>
    string(6) "anyone"
  }
}

   
```

## See Also

 `Zookeeper::create()` `Zookeeper::getAcl()` ZooKeeper Permissions `ZookeeperException`
