---
id: "zh-php-function-memcache-connect"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::connect"
aliases: ["memcache_connect"]
title: "打开与 memcached 服务器的连接"
signature: "bool Memcache::connect(string $host, [int $port = ...], [int $timeout = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.connect.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 打开与 memcached 服务器的连接

## 说明

```php
bool Memcache::connect(string $host, [int $port = ...], [int $timeout = ...])
```

```php
Memcache memcache_connect(string $host, [int $port = ...], [int $timeout = ...])
```

`Memcache::connect()` 建立与 memcached 服务器的连接。使用 `Memcache::connect()` 打开的连接在脚本执行结束后会自动关闭。也可以使用 `Memcache::close()` 关闭。

## 参数

- **`$host`** — memcached服务端监听主机地址。这个参数也可以指定为其他传输方式比如`unix:///path/to/memcached.sock` 来使用Unix域socket，在这种方式下，`$port`参数必须设置为`0`。
- **`$port`** — memcached服务端监听端口。当使用Unix域socket的时候要设置此参数为`0`。 — 注意：如果未指定 `$port`，默认为 memcache.default_port。因此，明智的做法是调用此方法时明确指定端口。
- **`$timeout`** — 连接持续（超时）时间，单位秒。默认值1秒，修改此值之前请三思，过长的连接持续时间可能会导致失去所有的缓存优势。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::connect()` example**

```php


<?php

/* procedural API */

$memcache_obj = memcache_connect('memcache_host', 11211);

/* OO API */

$memcache = new Memcache;
$memcache->connect('memcache_host', 11211);

?>

   
```

## 注释

> 当 `$port` 未指定时，此方法默认为 PHP ini 指令 memcache.default_port 的值。如果此值在应用程序的其他地方更改，可能会导致意外结果：因此，明智的做法是始终在这个方法调用。

## 参见

 `Memcache::pconnect()` `Memcache::close()`
