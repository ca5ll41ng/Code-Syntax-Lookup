---
id: "en-php-function-zookeeper-getacl"
language: "php"
lang: "en"
category: "function"
name: "Zookeeper::getAcl"
title: "Gets the acl associated with a node synchronously"
signature: "public array Zookeeper::getAcl(string $path)"
module: "zookeeper"
source_url: "https://www.php.net/manual/en/zookeeper.getacl.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Gets the acl associated with a node synchronously

## Description

```php
public array Zookeeper::getAcl(string $path)
```

## Parameters

- **`$path`** — The name of the node. Expressed as a file name with slashes separating ancestors of the node.

## Return Values

Return acl array on success and false on failure.

## Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to get ACL of a node.

> Since version 0.3.0, this method emits `ZookeeperException` and its derivatives.

## Examples

**`Zookeeper::getAcl()` example**

Get ACL of a node.

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

 `Zookeeper::create()` `Zookeeper::setAcl()` ZooKeeper Permissions `ZookeeperException`
