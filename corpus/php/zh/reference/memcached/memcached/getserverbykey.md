---
id: "zh-php-function-memcached-getserverbykey"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::getServerByKey"
title: "获取一个 key 所映射的服务器信息"
signature: "public array|false Memcached::getServerByKey(string $server_key)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.getserverbykey.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 获取一个 key 所映射的服务器信息

## 说明

```php
public array|false Memcached::getServerByKey(string $server_key)
```

`Memcached::getServerByKey()` 返回 `$server_key` 所映射的服务器, `Memcached::*ByKey()` 系列方法的中的 `$server_key` 参数, 实际上就是用来获取 操作的服务器的。（译注: 可以这样理解, *ByKey 系列函数首先调用 `Memcached::getServerByKey()` 获取服务器, 然后在此服务器上进行操作）

## 参数

- **`$server_key`** — 本键名用于识别储存和读取值的服务器。没有将实际的键名散列到具体的项目，而是在决定与哪一个 memcached 服务器通信时将其散列为服务器键名。这使得关联的项目在单一的服务上被组合起来以提高多重操作的效率。

## 返回值

成功时返回数组，包含三个 key `host`、`port` 和 `weight` 或者在失败时返回 `false`。 如需要则使用 `Memcached::getResultCode()`。

## 示例

**`Memcached::getServerByKey()` 示例**

```php


<?php
$m = new Memcached();
$m->addServers(array(
    array('mem1.domain.com', 11211, 40),
    array('mem2.domain.com', 11211, 40),
    array('mem3.domain.com', 11211, 20),
));

$m->setOption(Memcached::OPT_LIBKETAMA_COMPATIBLE, true);

var_dump($m->getServerByKey('user'));
var_dump($m->getServerByKey('log'));
var_dump($m->getServerByKey('ip'));
?>

    
```

以上示例的输出类似于：

```text


array(3) {
  ["host"]=>
  string(15) "mem3.domain.com"
  ["port"]=>
  int(11211)
  ["weight"]=>
  int(20)
}
array(3) {
  ["host"]=>
  string(15) "mem2.domain.com"
  ["port"]=>
  int(11211)
  ["weight"]=>
  int(40)
}
array(3) {
  ["host"]=>
  string(15) "mem2.domain.com"
  ["port"]=>
  int(11211)
  ["weight"]=>
  int(40)
}

    
```
