---
id: "zh-php-function-memcache-get"
language: "php"
lang: "zh"
category: "function"
name: "Memcache::get"
aliases: ["memcache_get"]
title: "从服务器检索元素"
signature: "string Memcache::get(string $key, [int $flags = ...])"
module: "memcache"
source_url: "https://www.php.net/manual/zh/memcache.get.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 从服务器检索元素

## 说明

```php
string Memcache::get(string $key, [int $flags = ...])
```

```php
array Memcache::get(array $keys, [array $flags = ...])
```

```php
string memcache_get(Memcache $memcache, string $key, [int $flags = ...])
```

```php
array memcache_get(Memcache $memcache, array $keys, [array $flags = ...])
```

如果此时服务器上存在这样的 `$key`，`Memcache::get()` 返回先前存储的元素数据。

可以给 `Memcache::get()` 传递 key 数组来获取元素值数组，返回的数组仅仅包含查找到的 key-value 对。

## 参数

- **`$key`** — 要获取值的key或key数组。
- **`$flags`** — 如果给定这个参数（以引用方式传递），该参数会被写入一些key对应的信息。这些标记和`Memcache::set()`方法中的同名参数 意义相同。用int值的低位保留了pecl/memcache的内部用法（比如：用来说明压缩和序列化状态）。（译注：最后一位表明是否序列化，倒数第二位表明是否经过压缩， 比如：如果此值为1表示经过序列化，但未经过压缩，2表明压缩而未序列化，3表明压缩并且序列化，0表明未经过压缩和序列化，具体算法可查找linux文件权限算法相关资料）

## 返回值

返回与 `$key` 关联的值或当 `$key` 为 `array` 时找到的键值对数组。失败时返回 `false`，未找到 `$key` 或 `$key` 为空 `array`。

## 示例

**`Memcache::get()` 示例**

```php


<?php

/* procedural API */
$memcache_obj = memcache_connect('memcache_host', 11211);
$var = memcache_get($memcache_obj, 'some_key');

/* OO API */
$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);
$var = $memcache_obj->get('some_key');

/*
你同样可以使用数组key作为参数，如果某个元素没有在服务端发现，结果数组中将不会包含这些key。
*/

/* procedural API */
$memcache_obj = memcache_connect('memcache_host', 11211);
$var = memcache_get($memcache_obj, Array('some_key', 'another_key'));

/* OO API */
$memcache_obj = new Memcache;
$memcache_obj->connect('memcache_host', 11211);
$var = $memcache_obj->get(Array('some_key', 'second_key'));

?>

   
```
