---
id: "zh-php-function-memcache-addserver"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::addServer"
aliases: ["memcache_add_server"]
title: "新增 memcached 服务器到连接池"
signature: "bool Memcache::addServer(string $host, int $port = 11211, [bool $persistent = ...], [int $weight = ...], [int $timeout = ...], [int $retry_interval = ...], [bool $status = ...], [callable $failure_callback = ...], [int $timeoutms = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.addserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 新增 memcached 服务器到连接池

## 说明

```php
bool Memcache::addServer(string $host, int $port = 11211, [bool $persistent = ...], [int $weight = ...], [int $timeout = ...], [int $retry_interval = ...], [bool $status = ...], [callable $failure_callback = ...], [int $timeoutms = ...])
```

```php
bool memcache_add_server(Memcache $memcache, string $host, int $port = 11211, [bool $persistent = ...], [int $weight = ...], [int $timeout = ...], [int $retry_interval = ...], [bool $status = ...], [callable $failure_callback = ...], [int $timeoutms = ...])
```

`Memcache::addServer()` 增加服务器到连接池。

当使用这个方法的时候(与`Memcache::connect()`和`Memcache::pconnect()`相反) 网络连接并不会立刻建立，而是直到真正使用的时候才建立。 因此在加入大量服务器到连接池中时也是没有开销的，因为它们可能并不会被使用。

故障转移可能在方法的任何一个层次发生，通常只要其他服务器可用用户就不会感受到。任何的socket或memcache服务器级别的错误 （比如内存溢出）都可能导致故障转移。而一般的客户端错误比如使用Memcache::add尝试增加一个已经存在的key则不会导致故障转移。

> 这个方法在2.0.0版本加入Memcache。

## 参数

- **`$host`** — 要连接的memcached服务端监听的主机位置。这个参数通常指定其他类型的传输比如Unix域套接字使用 `unix:///path/to/memcached.sock`，这种情况下参数`$port` 必须设置为`0`。
- **`$port`** — 要连接的memcached服务端监听的端口。当使用UNIX域套接字连接时设置为`0`。 — 注意：如果未指定 `$port`，默认为 memcache.default_port。因此，明智的做法是调用此方法时明确指定端口。
- **`$persistent`** — 控制是否使用持久化连接。默认`true`。
- **`$weight`** — 为此服务器创建的桶的数量，用来控制此服务器被选中的权重，单个服务器被选中的概率是相对于所有服务器weight总和而言的。
- **`$timeout`** — 连接持续（超时）时间（单位秒），默认值1秒，修改此值之前请三思，过长的连接持续时间可能会导致失去所有的缓存优势。
- **`$retry_interval`** — 服务器连接失败时重试的间隔时间，默认值15秒。如果此参数设置为-1表示不重试。此参数和`$persistent`参数在扩展以 `dl()`函数动态加载的时候无效。 — 每个失败的连接结构有自己的超时时间，并且在它失效之前选择后端服务请求时该结构会被跳过。一旦一个连接失效， 它将会被成功重新连接或被标记为失败连接以在下一个`$retry_interval`秒重连。 典型的影响是每个web服务子进程在服务于一个页面时将会每`$retry_interval`秒 尝试重新连接一次。
- **`$status`** — 控制此服务器是否可以被标记为在线状态。设置此参数值为`false`并且`$retry_interval`参数 设置为-1时允许将失败的服务器保留在一个池中以免影响key的分配算法。对于这个服务器的请求会进行故障转移或者立即失败， 这受限于`$memcache.allow_failover`参数的设置。该参数默认`true`，表明允许进行故障转移。
- **`$failure_callback`** — 允许用户指定一个运行时发生错误后的回调函数。回调函数会在故障转移之前运行。回调函数会接受到两个参数，分别是失败主机的 主机名和端口号。
- **`$timeoutms`**

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::addServer()` 示例**

```php


<?php

/* OO API */

$memcache = new Memcache;
$memcache->addServer('memcache_host', 11211);
$memcache->addServer('memcache_host2', 11211);

/* procedural API */

$memcache_obj = memcache_connect('memcache_host', 11211);
memcache_add_server($memcache_obj, 'memcache_host2', 11211);

?>

   
```

## 注释

> 当 `$port` 未指定时，此方法默认为 PHP ini 指令 memcache.default_port 的值。如果此值在应用程序的其他地方更改，可能会导致意外结果：因此，明智的做法是始终在这个方法调用。

## 参见

 `Memcache::connect()` `Memcache::pconnect()` `Memcache::close()` `Memcache::setServerParams()` `Memcache::getServerStatus()`
