---
id: "zh-php-function-memcached-addservers"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::addServers"
title: "向服务器池中增加多台服务器"
signature: "public bool Memcached::addServers(array $servers)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.addservers.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向服务器池中增加多台服务器

## 说明

```php
public bool Memcached::addServers(array $servers)
```

`Memcached::addServers()` 向服务器池中增加 `$servers`。`$servers` 中的每个条目都应该是包含主机名、端口以及可选权重的数组。此时并不会与这些服务端建立连接。

同一台服务器可能会在服务器池中多次出现，因为这里没有做重复检测。但这并不可取；相反，应该使用 `$weight` 选项增加此服务器的选择权重。

## 参数

- **`$array`** — 增加到池中的服务器数组。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcached::addServers()` 示例**

```php


<?php
$m = new Memcached();

$servers = array(
    array('mem1.domain.com', 11211, 33),
    array('mem2.domain.com', 11211, 67)
);
$m->addServers($servers);
?>

    
```

## 参见

`Memcached::addServer()` `Memcached::resetServerList()`
