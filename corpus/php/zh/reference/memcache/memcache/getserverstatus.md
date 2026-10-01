---
id: "zh-php-function-memcache-getserverstatus"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::getServerStatus"
aliases: ["memcache_get_server_status"]
title: "用于获取一个服务器的在线/离线状态"
signature: "int Memcache::getServerStatus(string $host, int $port = 11211)"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.getserverstatus.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 用于获取一个服务器的在线/离线状态

## 说明

```php
int Memcache::getServerStatus(string $host, int $port = 11211)
```

```php
int memcache_get_server_status(Memcache $memcache, string $host, int $port = 11211)
```

`Memcache::getServerStatus()` 返回服务器的在线/离线状态。

> 这个函数在 memcache 2.1.0 版本加入。

## 参数

- **`$host`** — 主机监听地址。
- **`$port`** — 主机监听端口，默认 11211.

## 返回值

返回一个服务器的状态，0 表示服务器离线，非 0 表示在线。

## 示例

**`Memcache::getServerStatus()` 示例**

```php


<?php

/* OO API */
$memcache = new Memcache;
$memcache->addServer('memcache_host', 11211);
echo $memcache->getServerStatus('memcache_host', 11211);

/* procedural API */
$memcache = memcache_connect('memcache_host', 11211);
echo memcache_get_server_status($memcache, 'memcache_host', 11211);

?>

   
```

## 参见

 `Memcache::addServer()` `Memcache::setServerParams()`
