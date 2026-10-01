---
id: "zh-php-function-memcache-close"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::close"
aliases: ["memcache_close"]
title: "关闭 memcached 连接"
signature: "bool Memcache::close()"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.close.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 关闭 memcached 连接

## 说明

```php
bool Memcache::close()
```

```php
bool memcache_close(Memcache $memcache)
```

`Memcache::close()`关闭与 memcached 服务器的连接。这个函数不会关闭持久化连接，持久化连接仅仅会在 web 服务器关机/重启时关闭。

## 参数

此函数没有参数。

## 返回值

成功时返回 `true`， 或者在失败时返回 `false`。

## 示例

**`Memcache::close()`示例**

```php


<?php

/* 面向过程 API */
$memcache_obj = memcache_connect('memcache_host', 11211);
/*
do something here...
*/
memcache_close($memcache_obj);

/* 面向对象 API */
$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);
/*
do something here...
*/
$memcache_obj->close();

?>

   
```

## 参见

 `Memcache::connect()` `Memcache::pconnect()`
