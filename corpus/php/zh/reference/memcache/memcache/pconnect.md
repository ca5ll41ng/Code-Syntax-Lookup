---
id: "zh-php-function-memcache-pconnect"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::pconnect"
aliases: ["memcache_pconnect"]
title: "打开对 memcached 服务器的持久连接"
signature: "bool Memcache::pconnect(string $host, [int $port = ...], [int $timeout = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.pconnect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开对 memcached 服务器的持久连接

## 说明

```php
bool Memcache::pconnect(string $host, [int $port = ...], [int $timeout = ...])
```

```php
Memcache Memcache::pconnect(string $host, [int $port = ...], [int $timeout = ...])
```

`Memcache::pconnect()` 和 `Memcache::connect()` 类似，区别在于前者建立的连接是持久的。该连接不会在脚本执行结束后或者调用 `Memcache::close()` 后关闭。

## 参数

- **`$host`** — 服务端监听的主机地址。这个参数还可以指定为其他传输方式比如 `unix:///path/to/memcached.sock` 来使用 Unix 域套接字，使用这种方式 `$port` 参数必须设置为 `0`。
- **`$port`** — 服务端监听的端口号。使用 Unix 域套接字的时候需要将这个参数设置为 `0`。
- **`$timeout`** — 连接持续（超时）时间，单位秒。默认值 1 秒，修改此值之前请三思，过长的连接持续时间可能会导致失去所有的缓存优势。

## 返回值

返回一个 Memcache 对象 或者在失败时返回 `false`.

## 示例

**`Memcache::pconnect()` 示例**

```php


<?php

/* procedural API */
$memcache_obj = memcache_pconnect('memcache_host', 11211);

/* OO API */

$memcache_obj = new Memcache;
$memcache_obj->pconnect('memcache_host', 11211);

?>

   
```

## 参见

 `Memcache::connect()`
