---
id: "zh-php-function-memcached-construct"
language: "php"
lang: "zh"
category: "function"
name: "Memcached::__construct"
title: "创建 Memcached 实例"
signature: "public Memcached::__construct(string|null $persistent_id = null, callable|null $callback = null, string|null $connection_str = null)"
module: "memcached"
source_url: "https://www.php.net/manual/zh/memcached.construct.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 创建 Memcached 实例

## 说明

```php
public Memcached::__construct(string|null $persistent_id = null, callable|null $callback = null, string|null $connection_str = null)
```

创建 Memcached 实例表示连接到 Memcached 服务端。

> 本函数还未编写文档，仅有参数列表。

## 参数

- **`$persistent_id`** — 默认情况下，在请求结束后会销毁 Memcached 实例。但可以在创建时通过 `$persistent_id` 为每个实例指定唯一的 ID，在请求间共享实例。所有通过相同的 `$persistent_id` 值创建的实例共享同一个连接。
- **`$callback`**
- **`$connection_str`**

## 示例

**创建 Memcached 对象**

```php


<?php
/* 创建一个普通的对象 */
$m = new Memcached();
echo get_class($m);

/* 创建持久化对象 */
$m2 = new Memcached('story_pool');
$m3 = new Memcached('story_pool');

/* 现在$m2和$m3共享相同的连接 */
?>

    
```
