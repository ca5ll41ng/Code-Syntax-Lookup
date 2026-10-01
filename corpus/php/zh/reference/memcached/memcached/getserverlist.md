---
id: "zh-php-function-memcached-getserverlist"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getServerList"
title: "获取服务器池中的服务器列表"
signature: "public array Memcached::getServerList()"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getserverlist.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取服务器池中的服务器列表

## 说明

```php
public array Memcached::getServerList()
```

`Memcached::getServerList()` 返回服务器池中所有服务器列表.

## 参数

此函数没有参数。

## 返回值

服务器池中所有服务器列表.

## 示例

**`Memcached::getServerList()` 示例**

```php


<?php
$m = new Memcached();
$m->addServers(array(
    array('mem1.domain.com', 11211, 20),
    array('mem2.domain.com', 11311, 80),
));
var_dump($m->getServerList());
?>

    
```

以上示例会输出：

```text


array(2) {
  [0]=>
  array(3) {
    ["host"]=>
    string(15) "mem1.domain.com"
    ["port"]=>
    int(11211)
    ["weight"]=>
    int(20)
  }
  [1]=>
  array(3) {
    ["host"]=>
    string(15) "mem2.domain.com"
    ["port"]=>
    int(11311)
    ["weight"]=>
    int(80)
  }
}

    
```
