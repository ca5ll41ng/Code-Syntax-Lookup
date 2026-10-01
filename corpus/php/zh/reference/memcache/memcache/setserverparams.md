---
id: "zh-php-function-memcache-setserverparams"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::setServerParams"
aliases: ["memcache_set_server_params"]
title: "运行时修改服务器参数和状态"
signature: "bool Memcache::setServerParams(string $host, int $port = 11211, [int $timeout = ...], int $retry_interval = false, [bool $status = ...], [callable $failure_callback = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.setserverparams.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 运行时修改服务器参数和状态

## 说明

```php
bool Memcache::setServerParams(string $host, int $port = 11211, [int $timeout = ...], int $retry_interval = false, [bool $status = ...], [callable $failure_callback = ...])
```

```php
bool memcache_set_server_params(Memcache $memcache, string $host, int $port = 11211, [int $timeout = ...], int $retry_interval = false, [bool $status = ...], [callable $failure_callback = ...])
```

`Memcache::setServerParams()` 用于运行时修改服务器参数。

> 在 memcache 2.1.0 加入。

## 参数

- **`$host`** — 服务端监听地址。
- **`$port`** — 服务端监听端口。
- **`$timeout`** — 连接持续（超时）时间（单位秒），默认值 1 秒，修改此值之前请三思，过长的连接持续时间可能会导致失去所有的缓存优势。
- **`$retry_interval`** — 服务器连接失败时重试的间隔时间，默认值 15 秒。如果此参数设置为 -1 表示不重试。此参数和 `$persistent` 参数在扩展以 `dl()` 函数动态加载的时候无效。
- **`$status`** — 控制此服务器是否可以被标记为在线状态。设置此参数值为 `false` 并且 `$retry_interval` 参数 设置为 -1 时允许将失败的服务器保留在一个池中以免影响 key 的分配算法。对于这个服务器的请求会进行故障转移或者立即失败， 这受限于 `$memcache.allow_failover` 参数的设置。该参数默认 `true`，表明允许进行故障转移。
- **`$failure_callback`** — 允许用户指定一个运行时发生错误后的回调函数。回调函数会在故障转移之前运行。回调函数会接受到两个参数，分别是失败主机的 主机名和端口号。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::setServerParams()` 示例**

```php


<?php

function _callback_memcache_failure($host, $port) {
    print "memcache '$host:$port' failed";
}

/* OO API */

$memcache = new Memcache;

// 增加一台离线服务器
$memcache->addServer('memcache_host', 11211, false, 1, 1, -1, false);

// 使该服务器变为在线状态
$memcache->setServerParams('memcache_host', 11211, 1, 15, true, '_callback_memcache_failure');

/* procedural API */

$memcache_obj = memcache_connect('memcache_host', 11211);
memcache_set_server_params($memcache_obj, 'memcache_host', 11211, 1, 15, true, '_callback_memcache_failure');

?>

   
```

## 参见

 `Memcache::addServer()` `Memcache::getServerStatus()`
