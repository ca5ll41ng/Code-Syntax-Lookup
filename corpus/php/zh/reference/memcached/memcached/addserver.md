---
id: "zh-php-function-memcached-addserver"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::addServer"
title: "向服务器池增加服务器"
signature: "public bool Memcached::addServer(string $host, int $port, int $weight = 0)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.addserver.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 向服务器池增加服务器

## 说明

```php
public bool Memcached::addServer(string $host, int $port, int $weight = 0)
```

`Memcached::addServer()` 增加指定服务器到服务器池。此时不会与服务端建立连接，但如果使用一致性 key 分发选项（`Memcached::DISTRIBUTION_CONSISTENT` 或 `Memcached::OPT_LIBKETAMA_COMPATIBLE`），则必须更新一些内部的数据结构。 因此，如果需要增加多台服务器，最好使用 `Memcached::addServers()` 以确保这种更新只发生一次。

同一台服务器可以在服务器池中多次出现，因为没有做重复检测。但并不推荐这样做，对于期望提高某台服务器的权重，请使用 `$weight` 参数。

## 参数

- **`$host`** — memcached 服务端主机名。如果主机名无效，相关的数据操作的结果代码将被设置为 `Memcached::RES_HOST_LOOKUP_FAILURE`。从 2.0.0b1 版本开始，这个参数还可以指定 unix 套接字文件的路径。例如：`/path/to/memcached.sock` 使用 UNIX 域套接字，在这种情况下 `$port` 也必须设置为 `0`。
- **`$port`** — 运行 memcached 的端口号，通常是 `11211`。从版本 2.0.0b1 开始，在使用 UNIX 域套接字时将此参数设置为 `0`。
- **`$weight`** — 此服务器相对于服务器池中所有服务器的权重。此参数用来控制服务器在操作时被选中的概率。这个仅用于一致性分布选项，并且这个值通常是由服务端分配的内存来设置的。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcached::addServer()` 示例**

```php


<?php
$m = new Memcached();

/* Add 2 servers, so that the second one
   is twice as likely to be selected. */
$m->addServer('mem1.domain.com', 11211, 33);
$m->addServer('mem2.domain.com', 11211, 67);
?>

    
```

## 参见

`Memcached::addServers()` `Memcached::resetServerList()`
